import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-userdetailsdashboard',
  templateUrl: './userdetailsdashboard.component.html',
  styleUrl: './userdetailsdashboard.component.css'
})
export class UserdetailsdashboardComponent {

  getuser:any=[];

  
  constructor(private http: HttpClient){}

  ngOnInit():void{
    this.getUsers()
  }


  getUsers(){
    this.http.get("https://localhost:7111/api/Values/userdetails").subscribe((res)=>{
     console.log(res);
     this.getuser=res;
 
   }
   );
  }

}
