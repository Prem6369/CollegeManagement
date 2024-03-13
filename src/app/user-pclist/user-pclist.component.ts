import { Component, OnInit } from '@angular/core';
import { pc } from '../admin-pclist/admin-pclist.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-pclist',
  templateUrl: './user-pclist.component.html',
  styleUrl: './user-pclist.component.scss'
})
export class UserPclistComponent implements OnInit{

  pclist:pc[]=[];

  ngOnInit(): void {
    this.getpclist();
  }
  constructor(private http:HttpClient,private route:Router,private Route:ActivatedRoute){}
  
  getpclist(){
    this.http.get<any>('https://localhost:44394/api/Admin/PCList').subscribe(
      (response)=>{
        console.log(response);
        this.pclist=response;
        
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
