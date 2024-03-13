import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


export class contact{
  constructor(
    public id:number,
    public name:string,
    public email:string,
    public phonenumber:number,
    public message:string
  ){}
}
@Component({
  selector: 'app-admin-feedback-list',
  templateUrl: './admin-feedback-list.component.html',
  styleUrl: './admin-feedback-list.component.scss'
})
export class AdminFeedbackListComponent implements OnInit {
   data:contact[]=[];

   constructor(private http:HttpClient){}

   ngOnInit(): void {
     this.getcontact();
   }

   getcontact(){
    this.http.get<any>("https://localhost:44394/api/Admin/ContactForm").subscribe(
      (response)=>{
        console.log(response)
        this.data=response
      }
    )

   }
    
}
