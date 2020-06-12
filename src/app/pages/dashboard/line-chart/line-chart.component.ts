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
    legend:{display: true, position: 'top'}

  }
   data = {
    labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو'],
    datasets: [
      {
        label: 'الزائرون الجدد',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor:'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
      },
      {
        label: 'الزائرون الِقدام',
        data: [15, 232, 3, 666, 22, 42, 61],
        fill: true,
        backgroundColor:'rgba(15, 2, 61, 0.2)',
        borderColor: 'rgb(5, 2, 61)',
        borderWidth: 1,
      },
    ],
  };
  constructor() { }

  ngOnInit(): void {
  }

}
