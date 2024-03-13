import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

export class pc {
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
  selector: 'app-admin-pclist',
  templateUrl: './admin-pclist.component.html',
  styleUrl: './admin-pclist.component.scss',
})
export class AdminPclistComponent {
  PCList: pc[] = [];

  message: string = '';

  constructor(private httpclient: HttpClient,private route:Router) {}

  ngOnInit(): void {
    this.getPclist();
  }

  getPclist() {
    this.httpclient
      .get<any>('https://localhost:44394/api/Admin/PCList')
      .subscribe((response) => {
        console.log(response);
        this.PCList = response;
      });
  }
  delete(courseid: string) {
    const userConfirmed = window.confirm('Are you sure you want to delete?');
    if (userConfirmed) {
      this.httpclient
        .delete(`https://localhost:44394/api/Admin/DeletePC/` + courseid, {
          responseType: 'text',
        })
        .subscribe((response) => {
          console.log(response);
          this.getPclist();
        });
    }
  }
  editug(courseid:string){
    this.route.navigate(['editpc'], {
      queryParams: { courseId: courseid }
    });
  }
}
