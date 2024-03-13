import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {


  Register = new FormGroup({
    firstname : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    lastname:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    DateOfBirth: new FormControl('', [Validators.required, Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]),
    age:new FormControl('',[Validators.required,Validators.maxLength(3)]),
    gender : new FormControl('',[Validators.required,Validators.pattern('')]),
    phonenumber:new FormControl('',[Validators.required,Validators.pattern('^[\\d]{10}$')]),
    address : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z\\d]+$')]),
    state:new FormControl('',[Validators.required,Validators.pattern('')]),
    city : new FormControl('',[Validators.required,Validators.pattern('')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!#$%@])[a-zA-Z\\d!#$%@]{6,}$'
    )]),

  });
 


  ngOnInit(): void {
    
  }
  message:string=''
  constructor(private http: HttpClient,private router:Router) {}
    Signup(){
      if(this.Register.valid){
      var admin=this.Register.value
  
      console.log(admin)
      this.http.post("https://localhost:44394/api/Home/Signup",admin,{ responseType: 'text' }).subscribe(
        (response) => {
          console.log('Data added successfully:', response);
          if(response==="existing email"){
            this.message="Email Already Taken Please Use Another Email";
          }
          else{
            this.router.navigate(['Signin'])
          }
  
          this.cleardata();
          // this.router.navigate(['/Uglist']);
        });
      }
    } 
  
  
    cleardata(){
      this.Register= new FormGroup({
        firstname : new FormControl(""),
        lastname:new FormControl(""),
        DateOfBirth : new FormControl(""),
        age:new FormControl(""),
        gender : new FormControl(""),
        phonenumber:new FormControl(""),
        address : new FormControl(""),
        state:new FormControl(""),
        city : new FormControl(""),
        email:new FormControl(""),
        password:new FormControl("")
  
        });
      }

      get firstname(){
        return this.Register.get('firstname')
      }
      get lastname(){
        return this.Register.get('lastname')
      }
      get gender(){
        return this.Register.get('gender')
      }
      get age(){
        return this.Register.get('age')
      }
      get phonenumber(){
        return this.Register.get('phonenumber')
      }
      get email(){
        return this.Register.get('email')
      }
      get password(){
        return this.Register.get('password')
      }
      get address(){
        return this.Register.get('address');
      }
      get state(){
        return this.Register.get('state')
      }
      get city(){
        return this.Register.get('city');
      }



      calculateAge() {
        const dateOfBirthControl = this.Register.get('DateOfBirth');
     
        if (dateOfBirthControl && dateOfBirthControl.value) {
          const birthDate: Date = new Date(dateOfBirthControl.value);
          const today: Date = new Date();
     
          const age: number = today.getFullYear() - birthDate.getFullYear();
          this.Register.patchValue({
            age: age.toString()
          });
     
        } else {
          console.error('Date of birth is null or undefined.');
        }
    }

    cityOptions: string[] = [];

    onStateChange(event: Event): void {
      const selectedState = (event.target as HTMLSelectElement).value;
      if (selectedState) {
        const citiesForSelectedState = this.citiesByState[selectedState];
        this.Register.get('city')?.setValue('');
        this.Register.get('city')?.setValidators([Validators.required]);
        this.Register.get('city')?.updateValueAndValidity();
   
        // Update the cities in the dropdown for the selected state
        this.cityOptions = citiesForSelectedState;
      } else {
        this.Register.get('city')?.setValue('');
        this.Register.get('city')?.clearValidators();
        this.Register.get('city')?.updateValueAndValidity();
   
        // Clear the city dropdown when no state is selected
        this.cityOptions = [];
      }
    }
   
  citiesByState: { [key: string]: string[] } = {
      'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
      'Karnataka': ['Bangalore', 'Mysore', 'Kolar'],
      'Maharashtra':['Mumbai','Nagpur','Pune'],
      'Kerala':['Kochin','Thrissur','Alappuzha']
    };
      
      
  }
  
  
  