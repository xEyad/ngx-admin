import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  facebokInfo =  Array(6).fill(
    {
      name:'Engagment',
      value:"450,560",
      icon:"fas fa-users"
    });
}
