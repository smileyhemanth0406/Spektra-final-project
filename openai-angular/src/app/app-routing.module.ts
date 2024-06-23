import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResponseComponent } from './response/response.component';
import { LoginInComponent } from './login-in/login-in.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashLoginComponent } from './dash-login/dash-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserdetailsdashboardComponent } from './userdetailsdashboard/userdetailsdashboard.component';
import { AlldataComponent } from './alldata/alldata.component';
import { GraphComponent } from './graph/graph.component';



const routes: Routes = [
    {path: '', redirectTo:'alldata', pathMatch:'full'},
    {path: 'login', component : LoginInComponent},
    {path: 'register', component :SignUpComponent},
    {path:'response',component:ResponseComponent},
    {path: 'varify-email', component : VarifyEmailComponent},
    {path: 'forgot-password', component : ForgotPasswordComponent},
    {path:'home',component:HomePageComponent},
    {path:'signup',component:SignUpComponent},
    {path:'dashlogin',component:DashLoginComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'userdetails',component:UserdetailsdashboardComponent},
    {path:'alldata',component:AlldataComponent},
    { path: 'graph', component: GraphComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
