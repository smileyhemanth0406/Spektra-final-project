// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-dash-login',
//   templateUrl: './dash-login.component.html',
//   styleUrl: './dash-login.component.css'
// })
// export class DashLoginComponent {
//   constructor(private router: Router) {}

//   login() {
//     // Perform login logic here if needed
//     // Navigate to '/dashlogin' route on successful login
//     this.router.navigate(['/dashlogin']);
//   }

// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dash-login',
  templateUrl: './dash-login.component.html',
  styleUrls: ['./dash-login.component.css']
})
export class DashLoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    this.http.post('https://localhost:7111/api/Values/login', { username: this.username, password: this.password }).subscribe(
      (response: any) => {
        if (response.success) {
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Incorrect username or password';
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred during login';
      }
    );
  }
}
