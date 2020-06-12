import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees= Array(8).fill({name:"lizea foda",title:"english supervisor",img:"https://loremflickr.com/50/50/girl/all",workRate:"15",evaluation:"+8"});

  constructor() { }

  ngOnInit(): void {
  }

}
