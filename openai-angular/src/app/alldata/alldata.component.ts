import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrl: './alldata.component.css'
})
export class AlldataComponent {


  navigateToResponse() {
   alert("Please Login First");
 }

}