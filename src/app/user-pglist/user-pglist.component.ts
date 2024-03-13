import { Component, OnInit } from '@angular/core';
import { pc } from '../admin-pclist/admin-pclist.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-pglist',
  templateUrl: './user-pglist.component.html',
  styleUrl: './user-pglist.component.scss'
})
export class UserPglistComponent implements OnInit{

  pglist:pc[]=[];

  constructor(private http:HttpClient,private route:Router){}
  ngOnInit(): void {
    this.getpglist();
  }

    getpglist(){
      this.http.get<any>('https://localhost:44394/api/Admin/PGList').subscribe(
        (response)=>{
          console.log(response);
          this.pglist=response;
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
