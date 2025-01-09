import { Component } from '@angular/core';
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
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  Highcharts: typeof Highcharts = Highcharts; // Define Highcharts property
  chartOptions: Highcharts.Options = {}

    ngOnInit(): void {
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
    }
}
