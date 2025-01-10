import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular'; 

@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule, CommonModule, HighchartsChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  Highcharts: typeof Highcharts = Highcharts; // Define Highcharts property
  chartOptions: Highcharts.Options = {}

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
      // Select all elements with the class 'highcharts-credits'
    const creditsElements = document.querySelectorAll('.highcharts-credits');
    
    // Loop through each element and hide it
    creditsElements.forEach((element: Element) => {
      // Cast the element to HTMLElement and hide it
      const htmlElement = element as HTMLElement;
      this.renderer.setStyle(htmlElement, 'display', 'none');
    });

    Highcharts.chart('container', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Form Validation Error'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '{point.name}: <b>{point.percentage:.1f}%</b>'
          },
          colors: [
            {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
              stops: [
                [0, 'rgba(255, 255, 255, 1)'],
                [1, 'rgb(26, 170, 43)']
              ]
            },
            {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
              stops: [
                [0, 'rgba(255, 255, 255, 1)'],
                [1, 'rgb(193, 50, 59)']
              ]
            },
            {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
              stops: [
                [0, 'rgba(255, 255, 255, 1)'],
                [1, 'rgb(130, 153, 162)']
              ]
            }
          ]
        }
      },
      series: [{
        type: 'pie',
        name: 'Brands',
        data: [
          { name: 'Success', y: 90.00 },
          { name: 'Failures', y: 10.00 },
          { name: 'Not Tested', y: 0.00 },
        ]
      }]
    });

    const hideCredits = () => {
      const creditsElements = document.querySelectorAll('.highcharts-credits');
      creditsElements.forEach((element: Element) => {
        const htmlElement = element as HTMLElement;
        this.renderer.setStyle(htmlElement, 'display', 'none');
      });
    };

    // Hide on initial render
    hideCredits();

    // Optionally, use setInterval to hide credits every X seconds in case of re-renders
    setInterval(hideCredits, 2000);  // Adjust the interval as needed
  }
}
