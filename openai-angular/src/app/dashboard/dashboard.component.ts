import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totaluser: any;
  getuser: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.totalusers();

  }

  totalusers() {
    this.http.get<number>('https://localhost:7111/api/Values/totalUsers').subscribe(res => {
      this.totaluser = res;
    });
  }
}
