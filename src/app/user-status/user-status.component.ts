import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationserviceService } from '../authenticationservice.service';

export class statusmodel{
  constructor(
    public program:string,
    public courseid:string,
    public coursename:string,
    public firstName:string,
    public email:string,
    public status:string

  ) {}
}
@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss']
})


export class UserStatusComponent implements OnInit{

  status:statusmodel[]=[];
  id: number | undefined;

  constructor(private http:HttpClient,private session:AuthenticationserviceService){}

  ngOnInit() {
    
    this.id=this.session.getid;
    console.log('User ID:', this.id);
    this.getstatus();

  }
  getstatus(){

    this.id;
    this.http.get<any>('https://localhost:44394/api/Admission/Status/'+this.id).subscribe(
      (response)=>{
        console.log('API Response:',response);
        this.status=response;
      }
    )
  }
}
