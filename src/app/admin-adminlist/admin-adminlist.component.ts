import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationserviceService } from '../authenticationservice.service';

export class Admin {
  constructor(
    public id: number,
    public role: number,
    public firstName: string,
    public lastName: string,
    public gender: string,
    public phoneNumber: number,
    public address: string,
    public email: string,
    public password: string
  ) {}
}

@Component({
  selector: 'app-admin-adminlist',
  templateUrl: './admin-adminlist.component.html',
  styleUrls: ['./admin-adminlist.component.scss'],
})
export class AdminAdminlistComponent implements OnInit {
  data: Admin[] = [];

  constructor(private httpclient: HttpClient,private session:AuthenticationserviceService) {}
  sessionid!:number;
  ngOnInit(): void {
    this.sessionid=this.session.getid
    this.getadmin();
  }

  getadmin() {
    this.httpclient
      .get<any>('https://localhost:44394/api/Admin/Adminlist')
      .subscribe((response) => {
        console.log(response);

        this.data = response;
      });
  }

  delete(id: number) {
    const userConfirmed = window.confirm('Are you sure you want to delete?');
    if (userConfirmed) {
      this.httpclient
        .delete(`https://localhost:44394/api/Admin/deleteAdmin/${id}/${this.sessionid}`,{responseType:'text'})
        .subscribe((response) => {
          console.log(response);
          if(response==='error'){
            alert("Admin can't delete our details");
          }
          this.getadmin();
        });
    }
  }

}
