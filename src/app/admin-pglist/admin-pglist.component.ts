import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class pg {
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
  selector: 'app-admin-pglist',
  templateUrl: './admin-pglist.component.html',
  styleUrl: './admin-pglist.component.scss',
})
export class AdminPglistComponent implements OnInit {
  PGList: pg[] = [];

  constructor(private httpclient: HttpClient,private route:Router) {}

  ngOnInit(): void {
    this.getPglist();
  }

  getPglist() {
    this.httpclient
      .get<any>('https://localhost:44394/api/Admin/PGList')
      .subscribe((response) => {
        console.log(response);
        this.PGList = response;
      });
  }

  delete(courseid: string) {
    const userConfirmed = window.confirm('Are you sure you want to delete?');
    if (userConfirmed) {
      this.httpclient
        .delete(`https://localhost:44394/api/Admin/DeletePG/` + courseid, {
          responseType: 'text',
        })
        .subscribe((response) => {
          console.log(response);
          this.getPglist();
        });
    }
  }

  editug(courseid:string){
    this.route.navigate(['editpg'], {
      queryParams: { courseId: courseid }
    });
  }
}
