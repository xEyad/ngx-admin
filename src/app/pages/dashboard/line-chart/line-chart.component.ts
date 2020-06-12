import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  options={
    maintainAspectRatio: false,
    responsive: true,
    legend:{display: true, position: 'top'},
    tooltips:{intersect:false,mode:'index'}

  }
   data = {
    labels: ['January', 'February', 'Mars', 'April', 'May', 'June', 'July'],
    // labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو'],
    datasets: [
      {
        label: 'New visitors',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor:'rgba(69, 67, 114, 0.5)',
        borderColor: 'rgb(69, 67, 114)',
        borderWidth: 1,
      },
      {
        label: 'Old visitors',
        data: [15, 232, 3, 666, 22, 42, 61],
        fill: true,
        backgroundColor:'rgba(102, 78, 76, 0.2)',
        borderColor: 'rgb(102, 78, 76)',
        borderWidth: 1,
      },
    ],
  };
  constructor() { }

  ngOnInit(): void {
  }

}
