// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { LoginInComponent } from './login-in/login-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ResponseComponent } from './response/response.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './varify-email/varify-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashLoginComponent } from './dash-login/dash-login.component';
import { UserdetailsdashboardComponent } from './userdetailsdashboard/userdetailsdashboard.component';
import { AlldataComponent } from './alldata/alldata.component';
import { GraphComponent } from './graph/graph.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginInComponent,
    SignUpComponent,
    HomePageComponent,
    ResponseComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    DashboardComponent,
    DashLoginComponent,
    UserdetailsdashboardComponent,
    AlldataComponent,
    GraphComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
