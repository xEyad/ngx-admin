
import { Utility } from './../../../models/utility';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  selectedDuration:string = 'Daily';
  @Input() siteData;
  dates:Date[];
  sessions;
  sessionDurations;
  views;
  viewsEval;
  sessionDurationsEval;
  sessionsEval;
  options={
    maintainAspectRatio: false,
    responsive: true,
    legend:{display: true, position: 'top'},
    tooltips:{intersect:false,mode:'index'}

  }
   data = {
    // labels: ['January', 'February', 'Mars', 'April', 'May', 'June', 'July'],
    labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو'],
    datasets: [
      {
        label: 'الزئرون الجدد',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor:'rgba(69, 67, 114, 0.5)',
        borderColor: 'rgb(69, 67, 114)',
        borderWidth: 1,
      },
      {
        label: 'الزائروم القدامى',
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
    this.dates = this.siteData.map((e)=>new Date(e.Date));
    this.dailyData();
    this.sessions = Utility.getAllOfKey(this.siteData,'Website Visistors Number')[Utility.getAllOfKey(this.siteData,'Website Visistors Number').length-1];
    this.sessionDurations = Utility.getAllOfKey(this.siteData,'Session Duration')[Utility.getAllOfKey(this.siteData,'Session Duration').length-1];
    this.views = Utility.getAllOfKey(this.siteData,'Total Number Of Views')[Utility.getAllOfKey(this.siteData,'Total Number Of Views').length-1];
  }
  dailyData()
  {
    const options = { weekday: 'long'};
    let labels = [];
    for (let index = this.dates.length-1; index > this.dates.length-7; index--) {
      const date = this.dates[index];
      labels.push(date.toLocaleDateString('ar-EG',options));
    }

    let visitors =Utility.getAllOfKey(this.siteData,'New Visistors')
    for (let index = visitors.length-1; index > visitors.length-7; index--) {
      const visitor = visitors[index];
      visitors.push(visitor);
    }
    this.data.labels = labels;
    this.data.datasets[0].data = visitors;
    this.sessionsEval = Utility.calculateDailyRate(Utility.getAllOfKey(this.siteData,'Website Visistors Number'));
    this.sessionDurationsEval = Utility.calculateDailyRate(Utility.getAllOfKey(this.siteData,'Session Duration'));
    this.viewsEval = Utility.calculateDailyRate(Utility.getAllOfKey(this.siteData,'Total Number Of Views'));
  }
  monthlyData()
  {
    const options = { month: 'long'};
    let labels = [];
    for (let index = this.dates.length-1; index > this.dates.length-12; index--) {
      const date = this.dates[index];
      labels.push(date.toLocaleDateString('ar-EG',options));
    }

    let visitors = Utility.getAllOfKey(this.siteData,'New Visistors')
    let temp = [];
   for (let i = 0; i < visitors.length; i++)
    {
      const v = visitors[i];
      // if(i)
    }

    this.data.labels = labels;
    this.data.datasets[0].data = visitors;

    this.sessionsEval = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.siteData,'Website Visistors Number'));
    this.sessionDurationsEval = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.siteData,'Session Duration'));
    this.viewsEval = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.siteData,'Total Number Of Views'));
  }

  changeDuration(selection:string)
  {
    this.selectedDuration = selection;
    switch (this.selectedDuration.toLowerCase()) {
      case 'daily':
        this.dailyData();
        return 'يومي'
      case 'monthly':
        this.monthlyData();
        return 'شهري'
      default:
        break;
    }
  }
}
