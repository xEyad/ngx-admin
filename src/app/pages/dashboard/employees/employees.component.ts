import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees= Array(8).fill({name:"lizea foda",title:"english supervisor",img:"https://loremflickr.com/50/50/girl/all",workRate:"15",evaluation:"+8"});
  selectedDuration:string = 'Daily';
  viewedDuration:string = 'day';
  constructor() { }

  ngOnInit(): void {
  }
  changeDuration(selection:string)
  {
    this.selectedDuration = selection;
    switch (selection.toLowerCase()) {
      case 'daily':
        this.viewedDuration = 'day';
        break;
      case 'weekly':
        this.viewedDuration = 'week';
        break;
      case 'monthly':
        this.viewedDuration = 'month';
        break;
      default:
        break;
    }
  }
}
