import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.scss'
})
export class ForgotpasswordComponent {

  forgotpassword=new FormGroup({
    phonenumber:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
  });
  message:string='';
  constructor(private http:HttpClient,private route:Router){}

  changepassword(){
    if(this.forgotpassword.valid){
        const forgot=this.forgotpassword.value;
      this.http.post(`https://localhost:44394/api/Home/Forgotpassword`,forgot,{ responseType:'text'}).subscribe(
        (response)=>{
          console.log('forgotpassword Request:',response);
          if(response==='success'){
            this.message='password change is successful'
            this.forgotpassword.reset();
          }
        }
        
      );
    }
  }
  get phonenumber(){
    return this.forgotpassword.get('phonenumber');
  }
  get email() {
    return this.forgotpassword.get('email');
  }
  get password() {
    return this.forgotpassword.get('password');
  }


}
