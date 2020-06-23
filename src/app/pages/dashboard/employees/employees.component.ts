import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { EmployeeHistoryComponent } from '../employee-history/employee-history.component';

@Component({
  selector: 'ngx-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees= Array(8).fill({name:"أميرة محمود",title:"مدرس أنجليزي",img:"https://loremflickr.com/50/50/girl/all",workRate:"15"});
  selectedDuration:string = 'Daily';
  viewedDuration:string = 'day';
  constructor(
    private dialogService: NbDialogService,
    private usersService:UsersService
    ) { }

  async ngOnInit()
  {
    this.employees = await this.usersService.getUsers();
  }
  changeDuration(selection:string)
  {
    this.selectedDuration = selection;
    switch (selection.toLowerCase()) {
      case 'daily':
        this.viewedDuration = 'يوم';
        break;
      case 'weekly':
        this.viewedDuration = 'أسبوع';
        break;
      case 'monthly':
        this.viewedDuration = 'شهر';
        break;
      default:
        break;
    }
  }
  openHistory() {
  let empoloyeeHistory:{date,timeWorked,activity}[]=Array(10).fill({date:'12 أبريل 2020',timeWorked:12,activity:"أعددت الأختبارات للطلاب"});
    let ref = this.dialogService.open(EmployeeHistoryComponent,);
    ref.componentRef.instance.empoloyeeHistory = empoloyeeHistory;
    ref.componentRef.instance.employeeName = 'مجدي';
    ref.componentRef.changeDetectorRef.detectChanges();
  }
}
