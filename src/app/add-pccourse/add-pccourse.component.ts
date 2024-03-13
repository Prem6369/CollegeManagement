import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pccourse',
  templateUrl: './add-pccourse.component.html',
  styleUrl: './add-pccourse.component.scss'
})
export class AddPccourseComponent {


  pccourse= new FormGroup({
    program:new FormControl('PC',[Validators.required,Validators.pattern(/^[A-Z]{2}$/)]),
    courseid:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d!#()$%@]+$')]),
    coursename:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d!#$%()@]+$')]),
    description:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d!#$%().@]+$')]),
    duration: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+ Year$')
    ]), 
       availableseat : new FormControl(4)
  });

  
message:string=''
constructor(private http: HttpClient,private router:Router) {}
  Addcourse(){
    if(this.pccourse.valid){
      var admin=this.pccourse.value

      console.log(admin)
      this.http.post("https://localhost:44394/api/Admin/AddPC",admin,{ responseType: 'text' }).subscribe(
        (response) => {
          console.log('Data added successfully:', response);
          if(response==="Errorcourse"){
            this.message="Courseid or Coursename  Already Taken Please Use Another Courseid or Coursename";
          }
          else{
            this.router.navigate(['Pclist'])
          }
  
          this.cleardata();
          // this.router.navigate(['/Uglist']);
        });
    }
 
  } 


  cleardata(){
    this.pccourse= new FormGroup({
  program:new FormControl(""),
  courseid:new FormControl(""),
  coursename:new FormControl(""),
  description:new FormControl(""),
  duration:new FormControl(""),
  availableseat : new FormControl(4)

      });
    }


    get program(){
      return this.pccourse.get('program');
     }
     get courseid(){
       return this.pccourse.get('courseid');
      }
      get coursename(){
       return this.pccourse.get('coursename');
      }
      get description(){
       return this.pccourse.get('description');
      }
      get duration(){
       return this.pccourse.get('duration');
      }
}


