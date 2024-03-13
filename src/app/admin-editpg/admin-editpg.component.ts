import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { AuthenticationserviceService } from '../authenticationservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-editpg',
  templateUrl: './admin-editpg.component.html',
  styleUrl: './admin-editpg.component.scss'
})
export class AdminEditpgComponent implements OnInit {
  id!: number;
   
  Courseid: string = '';
message: string = '';

constructor(
 private route: ActivatedRoute,
 private http: HttpClient,
 private router: Router,
 private session: AuthenticationserviceService
) {}

editpc = new FormGroup({
 Id:new FormControl(),
 Program: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]{2}$/)]),
 Courseid: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d!#()$%@]+$')]),
 Coursename: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d!#$%()@]+$')]),
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
   .get<any[]>(`https://localhost:44394/api/Admin/GetCourseId/${this.Courseid}`)
   .subscribe((response: any) => {
     console.log('1',response);
     this.editpc.patchValue({
       Id:response.id,
       Program: response.program,
       Courseid: response.courseid,
       Coursename: response.coursename,
       description: response.description,
       duration: response.duration
     });

     // Check if courseId is defined before calling updatecourse
     
   });
}

updatecourse() {
 var apply = this.editpc.value;
 console.log(apply);
 this.id=apply.Id
   this.http.put(
       `https://localhost:44394/api/Admin/UpdateCourse/${this.id}`,
       apply,
       { responseType: 'text' }
     )
     .subscribe((response) => {
       console.log('response',response);
       if(response='Update Successfully'){
         this.message='Update Successfully';
         this.editpc.reset();
         
       }
     });
 
}
get program(){
  return this.editpc.get('Program');
 }
 get courseid(){
   return this.editpc.get('Courseid');
  }
  get coursename(){
   return this.editpc.get('Coursename');
  }
  get description(){
   return this.editpc.get('description');
  }
  get duration(){
   return this.editpc.get('duration');
  }

}



