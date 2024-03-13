import { Component } from '@angular/core';
import { AuthenticationserviceService } from '../authenticationservice.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.scss'
})
export class UserNavbarComponent {

  constructor(private auth:AuthenticationserviceService){}

  logout(){
    this.auth.logout();
  }
}
