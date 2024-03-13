import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class ug {
  constructor(
    public id: number,
    public program: string,
    public courseid: string,
    public coursename: string,
    public description: string,
    public duration: string,
    public availableseat: string
  ) {}
}

@Component({
  selector: 'app-admin-uglist',
  templateUrl: './admin-uglist.component.html',
  styleUrl: './admin-uglist.component.scss',
})
export class AdminUglistComponent implements OnInit {
  UGList: ug[] = [];

  constructor(private httpclient: HttpClient,private route:Router) {}

  ngOnInit(): void {
    this.getUglist();
  }

  getUglist() {
    this.httpclient
      .get<any>('https://localhost:44394/api/Admin/UGList')
      .subscribe((response) => {
        console.log(response);
        this.UGList = response;
      });
  }

  delete(courseid: string) {
    const userConfirmed = window.confirm('Are you sure you want to delete?');
    if (userConfirmed) {
      this.httpclient
        .delete(`https://localhost:44394/api/Admin/DeleteUG/` + courseid, {
          responseType: 'text',
        })
        .subscribe((response) => {
          console.log(response);
          this.getUglist();
        });
    }
  }

  editug(courseid:string){
    this.route.navigate(['editug'], {
      queryParams: { courseId: courseid }
    });
  }
}
