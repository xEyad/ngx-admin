import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { EmployeeHistoryComponent } from '../employee-history/employee-history.component';

@Component({
  selector: 'ngx-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees= Array(8).fill({name:"lizea foda",title:"english supervisor",img:"https://loremflickr.com/50/50/girl/all",workRate:"15",evaluation:"+8"});
  selectedDuration:string = 'Daily';
  viewedDuration:string = 'day';
  constructor(private dialogService: NbDialogService) { }

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
  openHistory() {
  let empoloyeeHistory:{date,timeWorked,activity}[]=Array(10).fill({date:'asdas',timeWorked:1241,activity:"sadasdasdasdasdas"});
    let ref = this.dialogService.open(EmployeeHistoryComponent,);
    ref.componentRef.instance.empoloyeeHistory = empoloyeeHistory;
    ref.componentRef.instance.employeeName = 'Magdy';
    ref.componentRef.changeDetectorRef.detectChanges();
  }
}
