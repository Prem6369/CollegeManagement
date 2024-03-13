import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationserviceService } from '../authenticationservice.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-admin-editug',
  templateUrl: './admin-editug.component.html',
  styleUrls: ['./admin-editug.component.scss'],
})
export class AdminEditugComponent implements OnInit {
  id!: number;

  Courseid: string = '';
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private session: AuthenticationserviceService
  ) {}

  editug = new FormGroup({
    Id: new FormControl(),
    Program: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]{2}$/)]),
    Courseid: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d!#( .)$%@]+$')]),
    Coursename: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d!#$%( .)@]+$')]),
    description: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d!( ?,"").@]+$')]),
    duration: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+ Year$')]),
  });

  ngOnInit(): void {
    this.route.queryParams.subscribe((parms) => {
      this.Courseid = parms['courseId'];
    });
    this.getugcourse();
  }

  getugcourse() {
    this.http
      .get<any[]>(
        `https://localhost:44394/api/Admin/GetCourseId/${this.Courseid}`
      )
      .subscribe((response: any) => {
        console.log('1', response);

        this.editug.patchValue({
          Id: response.id,
          Program: response.program,
          Courseid: response.courseid,
          Coursename: response.coursename,
          description: response.description,
          duration: response.duration,
        });
      });
  }

  updatecourse() {
    var apply = this.editug.value;
    console.log(apply);
    this.id = apply.Id;
    this.http
      .put(`https://localhost:44394/api/Admin/UpdateCourse/${this.id}`, apply, {
        responseType: 'text',
      })
      .subscribe((response) => {
        console.log('response', response);
        if ((response = 'Update Successfully')) {
          this.message = 'Update Successfully';
          this.editug.reset();
        }
      });
  }
  get program(){
    return this.editug.get('Program');
   }
   get courseid(){
     return this.editug.get('Courseid');
    }
    get coursename(){
     return this.editug.get('Coursename');
    }
    get description(){
     return this.editug.get('description');
    }
    get duration(){
     return this.editug.get('duration');
    }
  
}
