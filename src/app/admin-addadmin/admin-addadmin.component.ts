import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-addadmin',
  templateUrl: './admin-addadmin.component.html',
  styleUrls: ['./admin-addadmin.component.scss'] // Use 'styleUrls' for multiple style files
})
export class AdminAddadminComponent  {

  message:string ='';
    addadmin= new FormGroup({
      firstName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      lastName:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
      gender:new FormControl(),
      PhoneNumber:new FormControl('',[Validators.required,Validators.pattern('^[\\d]{10}$')]),
      address:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d]+$')]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!#$%@])[a-zA-Z\\d!#$%@]{6,}$')])
    });
  
    constructor(private http: HttpClient,private route:Router) {}
    url="https://localhost:44394/api/Admin/Addadmin";
    admin(){

      var admin=this.addadmin.value

      console.log(admin)
      this.http.post("https://localhost:44394/api/Admin/Addadmin",admin,{ responseType: 'text' }).subscribe(
        (response) => {
          console.log('Data added successfully:', response);
          if(response==="Email Already Taken Please Use Another Email"){
              this.message="Email Already Taken Please Use Another Email";
          }
          else{
            this.message='Admin Added successfully';
            this.route.navigate(['/AdminList'])

          }
          this.cleardata();
        });
    } 


    cleardata(){
      this.addadmin= new FormGroup({
        firstName:new FormControl(""),
        lastName:new FormControl(""),
        gender:new FormControl(""),
        PhoneNumber:new FormControl(""),
        address:new FormControl(""),
        email:new FormControl(""),
        password:new FormControl(""),
        });
      }

      get firstName(){
        return this.addadmin.get('firstName')
      }

      get lastName(){
        return this.addadmin.get('lastName')
      }

      get PhoneNumber(){
        return this.addadmin.get('PhoneNumber')
      }

      get address(){
        return this.addadmin.get('address')
      }

      get email(){
        return this.addadmin.get('email')
      }

      get password(){
        return this.addadmin.get('password')
      }

    
}
