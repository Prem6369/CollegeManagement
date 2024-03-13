import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pgcourse',
  templateUrl: './add-pgcourse.component.html',
  styleUrl: './add-pgcourse.component.scss',
})
export class AddPgcourseComponent {
  pgcourse = new FormGroup({
    program: new FormControl('PG', [
      Validators.required,
      Validators.pattern(/^[A-Z]{2}$/),
    ]),
    courseid: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z\\d!#()$%@]+$'),
    ]),
    coursename: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z\\d!#$%()@]+$'),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z\\d!#$%().@]+$'),
    ]),
    duration: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]+ Year$'),
    ]),
    availableseat: new FormControl(4),
  });

  message: string = '';
  constructor(private http: HttpClient, private router: Router) {}
  Addcourse() {
    if (this.pgcourse.valid) {
      var admin = this.pgcourse.value;

      console.log(admin);
      this.http
        .post('https://localhost:44394/api/Admin/AddPC', admin, {
          responseType: 'text',
        })
        .subscribe((response) => {
          console.log('Data added successfully:', response);
          if (response === 'Errorcourse') {
            this.message =
              'Courseid or Coursename  Already Taken Please Use Another Courseid or Coursename';
          } else {
            this.router.navigate(['Pglist']);
          }
          this.cleardata();
        });
    }
  }

  cleardata() {
    this.pgcourse.reset();}


  get program() {
    return this.pgcourse.get('program');
  }
  get courseid() {
    return this.pgcourse.get('courseid');
  }
  get coursename() {
    return this.pgcourse.get('coursename');
  }
  get description() {
    return this.pgcourse.get('description');
  }
  get duration() {
    return this.pgcourse.get('duration');
  }
}
