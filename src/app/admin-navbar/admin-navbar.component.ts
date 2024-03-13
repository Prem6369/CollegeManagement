import { Component } from '@angular/core';
import { AuthenticationserviceService } from '../authenticationservice.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.scss'
})
export class AdminNavbarComponent {

  constructor(private auth:AuthenticationserviceService){}

  logout(){
    this.auth.logout()
  }
}
