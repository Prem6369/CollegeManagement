import { Component, OnInit } from '@angular/core';
import { AuthenticationserviceService } from '../authenticationservice.service';

@Component({
  selector: 'app-user-course',
  templateUrl: './user-course.component.html',
  styleUrls: ['./user-course.component.scss'] 
})

export class UserCourseComponent implements OnInit {
  sessionname: string = '';
  name: string='';
  auth: boolean=false;

  constructor(private session: AuthenticationserviceService) {}

  ngOnInit(): void {
    this.name = this.session.getname; 
    this.auth = this.session.getauthentication; 

    if (this.auth) {
      this.sessionname = this.name;
    }
  }
}
