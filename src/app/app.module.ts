import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AdminEnrollListComponent } from './admin-enroll-list/admin-enroll-list.component';
import { AdminCourseComponent } from './admin-course/admin-course.component';
import { AdminAddadminComponent } from './admin-addadmin/admin-addadmin.component';
import { AdminFeedbackListComponent } from './admin-feedback-list/admin-feedback-list.component';
import { AdminAdminlistComponent } from './admin-adminlist/admin-adminlist.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminUglistComponent } from './admin-uglist/admin-uglist.component';
import { AdminPglistComponent } from './admin-pglist/admin-pglist.component';
import { AdminPclistComponent } from './admin-pclist/admin-pclist.component';
import { EnrollListComponent } from './enroll-list/enroll-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddPgcourseComponent } from './add-pgcourse/add-pgcourse.component';
import { AddPccourseComponent } from './add-pccourse/add-pccourse.component';
import { AdminUserlistComponent } from './admin-userlist/admin-userlist.component';
import { UserCourseComponent } from './user-course/user-course.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { UserPclistComponent } from './user-pclist/user-pclist.component';
import { UserPglistComponent } from './user-pglist/user-pglist.component';
import { UserUglistComponent } from './user-uglist/user-uglist.component';
import { UserApplyComponent } from './user-apply/user-apply.component';
import { AdminEditugComponent } from './admin-editug/admin-editug.component';
import { AdminEditpgComponent } from './admin-editpg/admin-editpg.component';
import { AdminEditpcComponent } from './admin-editpc/admin-editpc.component';
import { UserEditprofileComponent } from './user-editprofile/user-editprofile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SigninComponent,
    SignupComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    HomeLayoutComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    AdminEnrollListComponent,
    AdminCourseComponent,
    AdminAddadminComponent,
    AdminFeedbackListComponent,
    AdminAdminlistComponent,
    AdminHomeComponent,
    AdminUglistComponent,
    AdminPglistComponent,
    AdminPclistComponent,
    EnrollListComponent,
    AddCourseComponent,
    AddPgcourseComponent,
    AddPccourseComponent,
    AdminUserlistComponent,
    UserCourseComponent,
    UserProfileComponent,
    UserStatusComponent,
    UserPclistComponent,
    UserPglistComponent,
    UserUglistComponent,
    UserApplyComponent,
    AdminEditugComponent,
    AdminEditpgComponent,
    AdminEditpcComponent,
    UserEditprofileComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
