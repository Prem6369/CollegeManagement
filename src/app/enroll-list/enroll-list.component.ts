import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { eventListeners } from '@popperjs/core';
import { AuthenticationserviceService } from '../authenticationservice.service';



export class EnrollList {
  constructor(
    public id:number,
    public program :string,
    public courseid:string,
    public coursename:string,
    public FirstName: string,
    public LastName: string,
    public Gender: string,
    public Email: string,
    public HighSchoolName: string,
    public HighSchoolGroup: string,
    public HighSchoolMark: number,
    public SecondarySchoolName: string,
    public SecondarySchoolMark: number,
    public CommunityCertificate: SafeResourceUrl,
    public Photo: SafeResourceUrl,
    public Status: number
  ) {}
}
@Component({
  selector: 'app-enroll-list',
  templateUrl: './enroll-list.component.html',
  styleUrl: './enroll-list.component.scss'
})
export class EnrollListComponent  implements OnInit{
  students: EnrollList[] = [];
  id !: number; 

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer,private session : AuthenticationserviceService) {}

  ngOnInit(): void {
    this.id = this.session.getid;
    this.getStudent();
  }

  private getSafePdfUrl(pdfBase64: string): SafeResourceUrl {
    const PdfUrl = `data:application/pdf;base64,${pdfBase64}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(PdfUrl);
  }
  getStudent(): void {
    this.httpClient.get<EnrollList[]>('https://localhost:44394/api/Admin/Userdetails')
      .subscribe((response: EnrollList[]) => {
        this.students = response.map((student: any) => {

            const ImgUrl = `data:image/png;base64,${student.photo}`;
            const safeimgurl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustUrl(ImgUrl);

            const safeCertificateUrl: SafeResourceUrl = this.getSafePdfUrl(student.communityCertificate);


          console.log(response);
          return new EnrollList(
            student.id,
            student.program,
            student.courseid,
            student.coursename,
            student.firstName,
            student.lastName,
            student.gender,
            student.email,
            student.highSchoolName,
            student.highSchoolGroup,
            student.highSchoolMark,
            student.secondarySchoolName,
            student.secondarySchoolMark,
            safeCertificateUrl,
            ImgUrl,
            student.status
          );
        });
      }
    );
  }

  onchange($event: any,id:number ) {
    const changestatus = $event.target.value;
  
    this.httpClient.post(`https://localhost:44394/api/Admin/statuschange/${id}/${changestatus}`,{ responsetype:'text'}).subscribe(
      (response) => {
        console.log('Response:', response);
      }
    );
  }

  
  
}
