import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export class Admin {
  constructor(
    public id: number,
    public role: number,
    public firstName: string,
    public lastName: string,
    public gender: string,
    public dateOfBirth:Date,
    public age:number,
    public phoneNumber: number,
    public state:string,
    public city:string,
    public address: string,
    public email: string,
    public password: string
  ) {}
}
@Component({
  selector: 'app-admin-userlist',
  templateUrl: './admin-userlist.component.html',
  styleUrl: './admin-userlist.component.scss'
})

export class AdminUserlistComponent implements OnInit {
  data: Admin[] = [];

  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {
    this.getadmin();
  }

  getadmin() {
    this.httpclient
      .get<any>('https://localhost:44394/api/Admin/Registerlist')
      .subscribe((response) => {
        console.log(response);

        this.data = response;
      });
  }

  delete(id: number) {
    const userConfirmed = window.confirm('Are you sure you want to delete?');
    if (userConfirmed) {
      this.httpclient
        .delete(`https://localhost:44394/api/Admin/deleteAdmin/` + id, {
          responseType: 'text',
        })
        .subscribe((response) => {
          console.log(response);
          this.getadmin();
        });
    }
  }
  edit(id: number) {
    // Assuming you have an endpoint for fetching a single admin by ID
    this.httpclient
      .get<Admin>(`https://localhost:44394/api/Admin/getAdmin/` + id)
      .subscribe(
        (admin) => {
          // Now you have the admin data and can perform the update logic
          this.updateAdmin(admin);
        },
        (error) => {
          console.error('Error fetching admin details:', error);
          // Handle the error (e.g., show a user-friendly message)
        }
      );
  }
  updateAdmin(updatedAdmin: Admin) {
    // Assuming you have an endpoint for updating an admin
    this.httpclient
      .put(`https://localhost:44394/api/Admin/updateAdmin/` + updatedAdmin.id, updatedAdmin)
      .subscribe(
        (response) => {
          console.log(response);
          this.getadmin();
        },
        (error) => {
          console.error('Error updating admin:', error);
          // Handle the error (e.g., show a user-friendly message)
        }
      );
  }

}
