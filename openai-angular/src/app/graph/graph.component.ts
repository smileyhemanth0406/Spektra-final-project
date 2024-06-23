import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  userRegistrationsData: any[] = []; // Replace with actual data source

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsersRegisteredPerDay().subscribe(data => {
      this.userRegistrationsData = data; // Assuming data is fetched correctly
      this.drawPieChart(data);
    });
  }
  drawPieChart(data: any[]): void {
    const counts = data.map((item: { count: any; }) => item.count);
    const dates = data.map((item: { date: string | number | Date; }) => item.date);
  
    const ctx = document.createElement('canvas').getContext('2d');
    if (!ctx) {
      return;
    }
  
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: dates,
        datasets: [{
          label: 'User Registrations Per Day',
          data: counts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(40, 40, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  
    // Append the created canvas to the DOM (assuming you need to dynamically create the canvas)
    const graphContainer = document.querySelector('.graph-container');
    if (graphContainer) {
      graphContainer.appendChild(ctx.canvas);
    }
  }
}
