import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'ngx-users-chart',
  templateUrl: './users-chart.component.html',
  styleUrls: ['./users-chart.component.scss']
})
export class UsersChartComponent implements OnInit {

  single: any[];
  view: any[] = [undefined, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#1877f2', '#1da1f2', '#ff0000', '#ff9900']
  };

  ngOnInit(){

  }

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
var single = [
  {
    "name": "Facebook",
    "value": 8940000
  },
  {
    "name": "Twitter",
    "value": 5000000
  },
  {
    "name": "Youtube",
    "value": 7200000
  },
    {
    "name": "Other",
    "value": 6200000
  }
];