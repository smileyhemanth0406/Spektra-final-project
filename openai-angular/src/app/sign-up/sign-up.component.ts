// sign-up.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../Shared/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  register() {
    if (this.email === '') {
      alert('Please enter email');
      return;
    }

    if (this.password === '') {
      alert('Please enter password');
      return;
    }

    const userData = {
      email: this.email,
      password: this.password
    };

   
    this.http.post('https://localhost:7111/api/Values', userData).subscribe(
      (response) => {
        console.log('Registration successful:', response);
      },
      (error) => {
        console.error('Registration error:', error);
      }
    );
    this.auth.register(this.email, this.password);

    this.email = '';
    this.password = '';
  }
}
