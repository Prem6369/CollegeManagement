import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminEnrollListComponent } from './admin-enroll-list/admin-enroll-list.component';
import { AdminCourseComponent } from './admin-course/admin-course.component';
import { AdminAddadminComponent } from './admin-addadmin/admin-addadmin.component';
import { AdminFeedbackListComponent } from './admin-feedback-list/admin-feedback-list.component';
import { AdminAdminlistComponent } from './admin-adminlist/admin-adminlist.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUglistComponent } from './admin-uglist/admin-uglist.component';
import { AdminPglistComponent } from './admin-pglist/admin-pglist.component';
import { AdminPclistComponent } from './admin-pclist/admin-pclist.component';
import { EnrollList, EnrollListComponent } from './enroll-list/enroll-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddPccourseComponent } from './add-pccourse/add-pccourse.component';
import { AddPgcourseComponent } from './add-pgcourse/add-pgcourse.component';
import { AdminUserlistComponent } from './admin-userlist/admin-userlist.component';
import { UserCourseComponent } from './user-course/user-course.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { UserUglistComponent } from './user-uglist/user-uglist.component';
import { UserPglistComponent } from './user-pglist/user-pglist.component';
import { UserPclistComponent } from './user-pclist/user-pclist.component';
import { UserApplyComponent } from './user-apply/user-apply.component';
import { AdminEditugComponent } from './admin-editug/admin-editug.component';
import { AdminEditpgComponent } from './admin-editpg/admin-editpg.component';
import { AdminEditpcComponent } from './admin-editpc/admin-editpc.component';
import { UserEditprofileComponent } from './user-editprofile/user-editprofile.component';
import { AuthenticationserviceService } from './authenticationservice.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'About', component: AboutComponent },
      { path: 'Signin', component: SigninComponent },
      { path: 'Signup', component: SignupComponent },
      { path: 'Contact', component: ContactComponent },
      { path: 'forgotpassword', component: ForgotpasswordComponent }

    ]
  },

  {
    path:'',
    component:AdminLayoutComponent,
    canActivate:[AuthenticationserviceService],
    children:[
      { path: 'AdminHome', component: AdminHomeComponent },
      { path: 'EnrollList', component: AdminEnrollListComponent },
      { path: 'Course', component: AdminCourseComponent },
      { path: 'AddAdmin', component: AdminAddadminComponent },
      { path: 'AdminList', component: AdminAdminlistComponent },
      { path: 'FeedbackList', component: AdminFeedbackListComponent },
      { path: 'Uglist', component: AdminUglistComponent },
      { path: 'Pglist', component: AdminPglistComponent },
      { path: 'Pclist', component: AdminPclistComponent },
      { path: 'enrolllist',component : EnrollListComponent},
      { path: 'Addcourse',component : AddCourseComponent},
      { path: 'AddPC',component : AddPccourseComponent},
      { path: 'AddPG',component : AddPgcourseComponent},
      { path: 'userlist',component : AdminUserlistComponent},
      { path: 'editug',component : AdminEditugComponent},
      { path: 'editpg',component : AdminEditpgComponent},
      { path: 'editpc',component : AdminEditpcComponent},


    ]
  },
  {
    path:'',
    component:UserLayoutComponent,
    canActivate:[AuthenticationserviceService],
    children:[
      { path:'usercourse',component:UserCourseComponent },
      { path:'profile',component:UserProfileComponent },
      { path:'status',component:UserStatusComponent },
      { path:'useruglist',component:UserUglistComponent },
      { path:'userpglist',component:UserPglistComponent },
      { path:'userpclist',component:UserPclistComponent },
      { path:'apply',component:UserApplyComponent },
      { path:'editprofile',component:UserEditprofileComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
