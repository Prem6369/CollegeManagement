import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationserviceService } from '../authenticationservice.service';

@Component({
  selector: 'app-user-editprofile',
  templateUrl: './user-editprofile.component.html',
  styleUrl: './user-editprofile.component.scss',
})
export class UserEditprofileComponent implements OnInit {
  message: string = '';
  name!: string;
  profile = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]),
    LastName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    Gender: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    HighSchoolName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z( .)]+$')]),
    HighSchoolGroup: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d(. )/\]+$')]),
    HighSchoolMark: new FormControl('',[Validators.required,Validators.maxLength(4)]),
    SecondarySchoolName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z(. )]+$')]),
    SecondarySchoolMark: new FormControl('',[Validators.required,Validators.maxLength(3)]),
    CommunityCertificate: new FormControl(),
    Photo: new FormControl(),
  });
  constructor(
    private http: HttpClient,
    private route: Router,
    private session: AuthenticationserviceService,
    private router: ActivatedRoute
  ) {}

  id!: number;

  ngOnInit(): void {
    this.id = this.session.getid;
    this.getlist();
  }

  getlist() {
    this.http
      .get<any[]>(
        `https://localhost:44394/api/Admission/UserProfile/${this.id}`
      )
      .subscribe((response: any[]) => {
        const pro = response[0];
        console.log('userprofile', pro);
        this.profile.patchValue({
          id:pro.id,
          firstName: pro.firstName,
          LastName: pro.lastName,
          Email: pro.email,
          Gender: pro.gender,
          HighSchoolName: pro.highSchoolName,
          HighSchoolGroup: pro.highSchoolGroup,
          HighSchoolMark: pro.highSchoolMark,
          SecondarySchoolName: pro.secondarySchoolName,
          SecondarySchoolMark: pro.secondarySchoolMark,
          CommunityCertificate: pro.communityCertificate,
          Photo: pro.photo,
        });
      });
  }

  save() {
    if(this.profile.valid){
    var profilevalue = this.profile.value;

    console.log(profilevalue);
    this.http
      .put(
        `https://localhost:44394/api/Admission/UpdateProfile/${this.id}`,
        profilevalue,
        { responseType: 'text' }
      )
      .subscribe((response) => {
        console.log('Data added successfully:', response);
        if(response==='profile updated successfully'){
          this.route.navigate(['/profile'])

        }
      });
    }
  }

  get firstName(){
    return this.profile.get('firstName');
   }
   get LastName(){
    return this.profile.get('LastName');
   }
   get Gender(){
     return this.profile.get('Gender');
    }
    get Email(){
      return this.profile.get('Email');
     }
     get HighSchoolName(){
      return this.profile.get('HighSchoolName');
     }
     get HighSchoolGroup(){
      return this.profile.get('HighSchoolGroup');
     }
     get HighSchoolMark(){
      return this.profile.get('HighSchoolMark');
     }
     get SecondarySchoolName(){
       return this.profile.get('SecondarySchoolName');
      }
      get SecondarySchoolMark(){
       return this.profile.get('SecondarySchoolMark');
      }
}
