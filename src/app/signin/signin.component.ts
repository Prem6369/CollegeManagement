import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationserviceService } from '../authenticationservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  register = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z\\d!#$%@]{5,}$'),
    ]),
  });
  message: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authservice: AuthenticationserviceService
  ) {}

  login() {
    if (this.register.valid) {
      var res = this.register.value;
      console.log(res);
      this.http
        .post('https://localhost:44394/api/Home/singin', res, {
          responseType: 'json',
        })
        .subscribe((response: any) => {
          if(response=='Internal Server Error'){
              this.message='Something Went Wrong';
          }
          else{
            this.successfullogin(response.role, response.id, response.name);
          }
        });
    }
  }

  successfullogin(role: string, id: number, name: string) {
    this.authservice.SetUserAuthentication(role, id, name);
    if (role === 'User') {
      this.router.navigate(['/usercourse']);
    } else if (role === 'Admin') {
      this.router.navigate(['/AdminHome']);
    } else if (role === 'Unknown') {
      this.message = 'Invalid username or password';
    }
  }

  cleardata() {
    this.register.reset();
  }

  get email() {
    return this.register.get('email');
  }
  get password() {
    return this.register.get('password');
  }
}
