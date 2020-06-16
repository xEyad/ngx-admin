import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-users-chart',
  templateUrl: './users-chart.component.html',
  styleUrls: ['./users-chart.component.scss']
})
export class UsersChartComponent implements OnInit {

  selectedDuration:string = 'Daily';
  single: any[];
  view: any[] = [undefined, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = false;
  isDoughnut: boolean = false;
  explodeSlices : boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#1877f2', '#ff0000', '#1da1f2','#833ab4',"#56E39F","#401F3E","#96897B", '#ff9900']
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
  changeDuration(selection:string)
  {
    this.selectedDuration = selection;
  }
}
let single = [
  {
    "name": "Facebook",
    "value": 8940
  },
  {
    "name": "Youtube",
    "value": 12000
  },
  {
    "name": "Twitter",
    "value": 5000
  },
  {
    "name": "Instagram",
    "value": 13520
  },
  {
    "name": "Referable",
    "value": 1785
  },
  {
    "name": "Direct",
    "value": 13520
  },
  {
    "name":"Organic",
    "value": 8954
  },
  {
    "name": "Other",
    "value": 6200
  }
];
