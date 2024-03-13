import { Component, OnInit } from '@angular/core';
import { pc } from '../admin-pclist/admin-pclist.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-uglist',
  templateUrl: './user-uglist.component.html',
  styleUrl: './user-uglist.component.scss'
})
export class UserUglistComponent implements OnInit {


  uglist:pc[]=[];

 constructor(private http:HttpClient,private route:Router){}
 ngOnInit(): void {
   this.getuglist();
 }

 getuglist(){
  this.http.get<any>('https://localhost:44394/api/Admin/UGList').subscribe(
    (response)=>{
      console.log(response);
      this.uglist=response;
    }
  )
 }

 courseId: string = '';
  program: string = '';
  courseName: string = '';
  applyForm(courseId: string, program: string, courseName: string) {
    this.route.navigate(['apply'], {
      queryParams: { courseId: courseId, program: program, courseName: courseName }
    });
  }
}
