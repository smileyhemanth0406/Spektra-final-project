import { Component } from '@angular/core';
import { AuthService } from '../Shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent {
//   usernameError: string = '';
//   passwordError: string = '';
//   agreeError: string = '';
//   successMessage: string = '';
 

//   validateForm(): boolean {
//     let isValid = true;
//     this.usernameError = '';
//     this.passwordError = '';
//     this.agreeError = '';
//     this.successMessage = '';
  
//     const username = (document.getElementById('username') as HTMLInputElement).value;
//     const password = (document.getElementById('password') as HTMLInputElement).value;
//     const agreeChecked = (document.getElementById('invalidCheck') as HTMLInputElement).checked;

//     if (username === '') {
//       this.usernameError = 'Username is required';
//       isValid = false;
//     }

//     if (password === '') {
//       this.passwordError = 'Password is required';
//       isValid = false;
//     }

//     if (!agreeChecked) {
//       this.agreeError = 'You must agree before submitting.';
//       isValid = false;
//     }

//     return isValid;
//   }

//   onSubmit(event: Event): void {
//     event.preventDefault();
//     if (this.validateForm()) {
//      alert( this.successMessage = 'Login successfully!');
//     }
//   }
// }
email : string = '';
password : string = '';
  // http: any;

constructor(private auth : AuthService,private route:Router) { }

ngOnInit(): void {
}

login() {
  if (this.email.trim() === '') {
    alert('Please enter email address');
    return;
  }

  if (this.password === '') {
    alert('Please enter password');
    return;
  }


 
    this.auth.login(this.email, this.password);


  this.email = '';
  this.password = '';
}

signInWithGoogle() {
  this.auth.googleSignIn();
}
}