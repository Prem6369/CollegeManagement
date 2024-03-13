import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AuthenticationserviceService } from '../authenticationservice.service';
import { Router } from '@angular/router';

export class profileclass {
  constructor(
    public firstName: string,
    public lastName: string,
    public gender: string,
    public email: string,
    public highSchoolName: string,
    public highSchoolGroup: string,
    public highSchoolMark: number,
    public secondarySchoolName: string,
    public secondarySchoolMark: number,
    public communityCertificate: SafeResourceUrl,
    public photo: SafeResourceUrl
  ) {}
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profiles: profileclass[] = [];
  id!: number;

  constructor(private http: HttpClient, private session: AuthenticationserviceService, private sanitizer: DomSanitizer,private route:Router) {}

  private getSafePdfUrl(pdfBase64: string): SafeResourceUrl {
    const PdfUrl = `data:application/pdf;base64,${pdfBase64}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(PdfUrl);
  }

  ngOnInit(): void {
    this.id = this.session.getid;
    this.getlist();
  }

  getlist() {
    this.http.get<profileclass[]>(`https://localhost:44394/api/Admission/UserProfile/${this.id}`).subscribe(
      (response: profileclass[]) => {
        console.log('profile', response);

        this.profiles = response.map((profile: any) => {
          const ImgUrl = `data:image/png;base64,${profile.photo}`;
          const safeimgurl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustUrl(ImgUrl);

          const safeCertificateUrl: SafeResourceUrl = this.getSafePdfUrl(profile.communityCertificate);

          return new profileclass(
            profile.firstName,
            profile.lastName,
            profile.gender,
            profile.email,
            profile.highSchoolName,
            profile.highSchoolGroup,
            profile.highSchoolMark,
            profile.secondarySchoolName,
            profile.secondarySchoolMark,
            safeCertificateUrl,
            safeimgurl
          );
          
        });
      }
    );
  }

  editprofile()
  {
    this.route.navigate(['/editprofile'])
  }
}
