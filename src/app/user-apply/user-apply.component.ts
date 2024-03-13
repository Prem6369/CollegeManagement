import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationserviceService } from '../authenticationservice.service';

@Component({
  selector: 'app-user-apply',
  templateUrl: './user-apply.component.html',
  styleUrl: './user-apply.component.scss',
})
export class UserApplyComponent implements OnInit {
  message: string = '';
  Applyuser = new FormGroup({
    id:new FormControl(),
    Program: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]{2}$/)]),
    Courseid: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d]+$')]),
    Coursename: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d( .)]+$')]),
    firstName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    LastName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    Gender: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    Email: new FormControl('',[Validators.required,Validators.email]),
    HighSchoolName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z( .)]+$')]),
    HighSchoolGroup: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d(. )/\]+$')]),
    HighSchoolMark: new FormControl('',[Validators.required,Validators.maxLength(4)]),
    SecondarySchoolName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z(.)]+$')]),
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
  program: string = '';
  courseid: string = '';
  coursename: string = '';
  firstname: string = '';
  email: string = '';
  gender: string = '';
  lastName: string = '';
  fname: string = '';

  ngOnInit(): void {
    this.id = this.session.getid;
    this.getlist();
    this.router.queryParams.subscribe((parms) => {
      this.program = parms['program'];
      this.courseid = parms['courseId'];
      this.coursename = parms['courseName'];
      this.Applyuser.patchValue({
        id:this.id,
        Program: this.program,
        Courseid: this.courseid,
        Coursename: this.coursename
      });
    });
  }

  getlist() {
    this.http
      .get<any>(`https://localhost:44394/api/Admission/Applyuser/${this.id}`)
      .subscribe((response: any) => {
        console.log(response);
        this.Applyuser.patchValue({
          firstName: response.firstName,
          LastName: response.lastName,
          Email: response.email,
          Gender: response.gender,
        });
       
      });
  }

  Applyclick() {
    if(this.Applyuser.valid){
    var apply = this.Applyuser.value;

    console.log(apply);
    this.http
      .put(
        `https://localhost:44394/api/Admission/Applyuserbyid/${this.id}`,
        apply,
        { responseType: 'text' }
      )
      .subscribe((response) => {
        console.log('Data added successfully:', response);
        if(response=="fail"){
          this.message="your already applyed or this coures is full "
        }
        
      });
    }
  }

  onload(event: Event) {
    const fileinput = event.target as HTMLInputElement;
    const file = fileinput.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const base64string = (e.target?.result as string).split(',')[1];
       
        this.Applyuser.patchValue({
          Photo: base64string,
        });
        console.log(base64string);
      };
      reader.readAsDataURL(file);
     
    }
  }

  onloadcert(event: Event) {
    const fileinput = event.target as HTMLInputElement;
    const file = fileinput.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const base64string = (e.target?.result as string).split(',')[1];

        this.Applyuser.patchValue({
          CommunityCertificate: base64string,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  get Program(){
    return this.Applyuser.get('Program');
   }
   get Courseid(){
     return this.Applyuser.get('Courseid');
    }
    get Coursename(){
     return this.Applyuser.get('Coursename');
    }
    get firstName(){
     return this.Applyuser.get('firstName');
    }
    get LastName(){
     return this.Applyuser.get('LastName');
    }
    get Gender(){
      return this.Applyuser.get('Gender');
     }
     get Email(){
       return this.Applyuser.get('Email');
      }
      get HighSchoolName(){
       return this.Applyuser.get('HighSchoolName');
      }
      get HighSchoolGroup(){
       return this.Applyuser.get('HighSchoolGroup');
      }
      get HighSchoolMark(){
       return this.Applyuser.get('HighSchoolMark');
      }
      get SecondarySchoolName(){
        return this.Applyuser.get('SecondarySchoolName');
       }
       get SecondarySchoolMark(){
        return this.Applyuser.get('SecondarySchoolMark');
       }
}
