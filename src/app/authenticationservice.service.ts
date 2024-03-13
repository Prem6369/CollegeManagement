import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationserviceService {
  constructor(private route: Router) {}
  private authentication: boolean = false;
  private authname: string = '';
  private authid!: number;
  private authrole: string = '';

  SetUserAuthentication(role: string, id: number, name: string) {
    this.authentication = true;
    this.authrole = role;
    this.authname = name;
    this.authid = id;

    sessionStorage.setItem('role', this.authrole);
    sessionStorage.setItem('firstname', this.authname);
    sessionStorage.setItem('id', this.authid.toString());
  }

  get getname() {
    return this.authname;
  }
  get getauthentication() {
    return this.authentication;
  }

  get getid() {
    return this.authid;
  }
  canActivate(): boolean {
    if (this.authentication) {
      if (
        this.authrole === 'Admin' ||
        this.authrole === 'User' ||
        this.authrole === 'Unknown'
      ) {
        return true;
      } else {
        this.route.navigate(['/Signin']);
        return false;
      }
    } else {
      this.route.navigate(['/Signin']);
      return false;
    }
  }

  logout() {
    this.authentication;
    this.authname = '';
    this.authid;
    this.authrole;
    this.route.navigate(['']);
    sessionStorage.clear();
  }
}
