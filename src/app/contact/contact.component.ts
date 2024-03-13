import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  Contact = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    email: new FormControl('',[Validators.required,Validators.email]),
    phonenumber:new FormControl('',[Validators.required,Validators.pattern('^[\\d]{10}$')]),
    message:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
  });

  messages: string = '';
  constructor(private http: HttpClient, private router: Router) {}
  feedback() {
    var contact = this.Contact.value;

    console.log(contact);
    this.http
      .post('https://localhost:44394/api/Home/Contact', contact, {
        responseType: 'text',
      })
      .subscribe((response) => {
        console.log('Data added successfully:', response);
        this.cleardata();
        this.messages="thanks for visiting"
      });
  }

  cleardata() {
    this.Contact = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phonenumber:new FormControl(''),
      message:new FormControl('')
    });
  }

          //Validations
          get name()
          {
            return this.Contact.get('name');
          }
              get email()
              {
                return this.Contact.get('email');
              }
                  get phonenumber()
                  {
                    return this.Contact.get('phonenumber');
                  }
                      get message()
                      {
                        return this.Contact.get('message');
                      }
}
