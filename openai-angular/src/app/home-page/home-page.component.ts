import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  ngAfterViewInit() {
    // Adjust video playback rate if needed
    (document.getElementById('background-video') as HTMLVideoElement).playbackRate = 1.0;
  }

  constructor(private router: Router) {}

}
