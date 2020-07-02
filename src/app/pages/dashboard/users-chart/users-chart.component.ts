import { Utility } from './../../../models/utility';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'ngx-users-chart',
  templateUrl: './users-chart.component.html',
  styleUrls: ['./users-chart.component.scss']
})
export class UsersChartComponent implements OnInit {

  fbUsers:any[];
  ytUsers:any[];
  twUsers:any[];
  inUsers:any[];
  refUsers:any[];
  liveUsers:any[];
  naturalUsers:any[];
  otherUsers:any[];
  selectedDuration:string = 'Daily';
  single: any[];
  view: any[] = [undefined, 400];
  @Input() data;
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
    this.fbUsers = Utility.getAllOfKey(this.data,'New Facebook Users');
    this.ytUsers = Utility.getAllOfKey(this.data,'New Youtube Users');
    this.twUsers = Utility.getAllOfKey(this.data,'New Twitter Users');
    this.inUsers = Utility.getAllOfKey(this.data,'New Instagram Users');
    this.refUsers = Utility.getAllOfKey(this.data,'New Refereable Users');
    this.liveUsers = Utility.getAllOfKey(this.data,'New Live Users');
    this.naturalUsers = Utility.getAllOfKey(this.data,'New Natural Users');
    this.otherUsers = Utility.getAllOfKey(this.data,'New Others Users');
    this.dailyData();
  }

  constructor() {
    // Object.assign(this, { single });
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
    switch (this.selectedDuration.toLowerCase()) {
      case 'daily':
        this.dailyData();
        return 'يومي'
      case 'monthly':
        this.monthlyData();
        return 'شهري'
      case 'weekly':
        this.weeklyData();
        return 'أسبوعي'
      default:
        break;
    }
  }
  private getPerDay(arr)
  {
    return Utility.calculateDailyRate(arr);
  }
  private getPerDayEval(arr)
  {
    let res = this.getPerDay(this.fbUsers) *100/arr[arr.length-2];
    return res.toFixed(1);
  }
  abs(n)
  {
    return Math.abs(n);
  }
  dailyData()
  {
    this.single = [
      {
        "name": "فيسبوك",
        "value": this.fbUsers.reverse()[0],
        "evaluation":this.getPerDayEval(this.fbUsers)
      },
      {
        "name": "يوتيوب",
        "value":  this.ytUsers.reverse()[0],
        "evaluation":this.getPerDayEval(this.ytUsers)

      },
      {
        "name": "تويتر",
        "value":  this.twUsers.reverse()[0],
        "evaluation":this.getPerDayEval(this.twUsers)

      },
      {
        "name": "أنستاجرام",
        "value":  this.inUsers.reverse()[0],
        "evaluation":this.getPerDayEval(this.inUsers)

      },
      {
        "name": "Referable",
        "value":  this.refUsers.reverse()[0],
        "evaluation":this.getPerDayEval(this.refUsers)

      },
      {
        "name": "مباشر",
        "value":  this.liveUsers.reverse()[0],
        "evaluation":this.getPerDayEval(this.liveUsers)

      },
      {
        "name":"طبيعي",
        "value":  this.naturalUsers.reverse()[0],
        "evaluation":this.getPerDayEval(this.naturalUsers)

      },
      {
        "name": "أخر",
        "value":  this.otherUsers.reverse()[0],
        "evaluation":this.getPerDayEval(this.otherUsers)

      }
    ];
  }

  private getPerWeek(arr)
  {
    return Utility.calculateWeeklyRate(arr);
  }
  private getPerWeekEval(arr)
  {
    return Utility.getDifferenceFromLastWeek(arr).toFixed(1);
  }
  weeklyData()
  {
    this.single = [
      {
        "name": "فيسبوك",
        "value": this.fbUsers.reverse()[0],
        "evaluation":this.getPerWeekEval(this.fbUsers)
      },
      {
        "name": "يوتيوب",
        "value":  this.ytUsers.reverse()[0],
        "evaluation":this.getPerWeekEval(this.ytUsers)

      },
      {
        "name": "تويتر",
        "value":  this.twUsers.reverse()[0],
        "evaluation":this.getPerWeekEval(this.twUsers)

      },
      {
        "name": "أنستاجرام",
        "value":  this.inUsers.reverse()[0],
        "evaluation":this.getPerWeekEval(this.inUsers)

      },
      {
        "name": "Referable",
        "value":  this.refUsers.reverse()[0],
        "evaluation":this.getPerWeekEval(this.refUsers)

      },
      {
        "name": "مباشر",
        "value":  this.liveUsers.reverse()[0],
        "evaluation":this.getPerWeekEval(this.liveUsers)

      },
      {
        "name":"طبيعي",
        "value":  this.naturalUsers.reverse()[0],
        "evaluation":this.getPerWeekEval(this.naturalUsers)

      },
      {
        "name": "أخر",
        "value":  this.otherUsers.reverse()[0],
        "evaluation":this.getPerWeekEval(this.otherUsers)

      }
    ];
  }

  private getPerMonth(arr)
  {
    // return arr[arr.length-1]-arr[arr.lenght-2];
    return Utility.calculateMonthlyRate(arr);
  }
  private getPerMonthEval(arr)
  {
    // this.getPerMonth(this.fbUsers) *100/arr[arr.lenght-2]
    return Utility.getDifferenceFromLastMonth(arr).toFixed(1);
  }
  monthlyData()
  {
    this.single = [
      {
        "name": "فيسبوك",
        "value": this.fbUsers.reverse()[0],
        "evaluation":this.getPerMonthEval(this.fbUsers)
      },
      {
        "name": "يوتيوب",
        "value":  this.ytUsers.reverse()[0],
        "evaluation":this.getPerMonthEval(this.ytUsers)

      },
      {
        "name": "تويتر",
        "value":  this.twUsers.reverse()[0],
        "evaluation":this.getPerMonthEval(this.twUsers)

      },
      {
        "name": "أنستاجرام",
        "value":  this.inUsers.reverse()[0],
        "evaluation":this.getPerMonthEval(this.inUsers)

      },
      {
        "name": "Referable",
        "value":  this.refUsers.reverse()[0],
        "evaluation":this.getPerMonthEval(this.refUsers)

      },
      {
        "name": "مباشر",
        "value":  this.liveUsers.reverse()[0],
        "evaluation":this.getPerMonthEval(this.liveUsers)

      },
      {
        "name":"طبيعي",
        "value":  this.naturalUsers.reverse()[0],
        "evaluation":this.getPerMonthEval(this.naturalUsers)

      },
      {
        "name": "أخر",
        "value":  this.otherUsers.reverse()[0],
        "evaluation":this.getPerMonthEval(this.otherUsers)

      }
    ];
  }
}
// let single = [
//   {
//     "name": "فيسبوك",
//     "value": 8940,
//     "evaluation":this.getPerDayEval(this.fbUsers)

//   },
//   {
//     "name": "يوتيوب",
//     "value": 12000,
//     "evaluation":this.getPerDayEval(this.fbUsers)

//   },
//   {
//     "name": "تويتر",
//     "value": 5000,
//     "evaluation":this.getPerDayEval(this.fbUsers)

//   },
//   {
//     "name": "أنستاجرام",
//     "value": 13520,
//     "evaluation":this.getPerDayEval(this.fbUsers)

//   },
//   {
//     "name": "Referable",
//     "value": 1785,
//     "evaluation":this.getPerDayEval(this.fbUsers)

//   },
//   {
//     "name": "مباشر",
//     "value": 13520,
//     "evaluation":this.getPerDayEval(this.fbUsers)

//   },
//   {
//     "name":"طبيعي",
//     "value": 8954,
//     "evaluation":this.getPerDayEval(this.fbUsers)

//   },
//   {
//     "name": "أخر",
//     "value": 6200,
//     "evaluation":this.getPerDayEval(this.fbUsers)

//   }
// ];
