
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
  abs(n)
  {
    return Math.abs(n);
  }
  dailyData()
  {
    const options = { weekday: 'long'};
    let labels = [];

    const days = this.dates.slice(this.dates.length-7);
    for (const day of days) {
      labels.push(day.toLocaleDateString('ar-EG',options));
    }
    let newVisitors = Utility.getAllOfKey(this.siteData,'New Visistors');
    let oldVisitors = Utility.getAllOfKey(this.siteData,'Old Visistors');
    this.data.labels = labels;

    this.data.datasets[0].data = newVisitors.slice(newVisitors.length-7);
    this.data.datasets[1].data = oldVisitors.slice(oldVisitors.length-7);

    this.sessionsEval = Utility.calculateDailyRate(Utility.getAllOfKey(this.siteData,'Website Visistors Number'));
    this.sessionDurationsEval = Utility.calculateDailyRate(Utility.getAllOfKey(this.siteData,'Session Duration'));
    this.viewsEval = Utility.calculateDailyRate(Utility.getAllOfKey(this.siteData,'Total Number Of Views'));
  }

  monthlyData()
  {
    const options = { month: 'long'};
    let labels = [];

    //how many 30s? (max of 12)
    //total new visitors for every month
    //total old visitors for every month
    //it should be in the end 2 arrays with max of 12 entry
    const months = this.dates.slice(this.dates.length-61);
    for (const month of months) {
      labels.push(month.toLocaleDateString('ar-EG',options));
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
