import { Component, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular'; 
import { ScheduleModule, EventSettingsModel, TimelineViewsService } from '@syncfusion/ej2-angular-schedule'
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars'
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule'

@Component({
  selector: 'app-dashboard',
  providers: [DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService],
  standalone: true,
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' #scheduleObj height='550px' [selectedDate]="selectedDate"
  [eventSettings]="eventSettings"></ejs-schedule>`,
  imports: [MatIconModule, CommonModule, HighchartsChartModule, ScheduleModule, TimePickerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dropdownOpen = false;
  public selectedDate: Date = new Date(2018, 1, 15);
    public data: object [] = [{
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    StartTime: new Date(2018, 1, 15, 9, 30),
    EndTime: new Date(2018, 1, 15, 11, 0),
    RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=2',
    IsBlock: true
}, {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    StartTime: new Date(2018, 1, 14, 12, 0),
    EndTime: new Date(2018, 1, 14, 14, 0)
}];
    public eventSettings: EventSettingsModel = {
        dataSource: this.data,
    };

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
