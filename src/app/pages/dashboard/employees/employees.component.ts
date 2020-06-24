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
  employees:any[];
  selectedDuration:string = 'Daily';
  viewedDuration:string = 'day';
  constructor(
    private dialogService: NbDialogService,
    private usersService:UsersService
    ) { }

  async ngOnInit()
  {
    this.employees = await this.usersService.getUsers();
    this.employees = this.employees.filter((e)=>e.type=="dataEntry" || e.type=="employee");
    // this.employees = this.employees.map((e)=>{
    //   return {
    //     //array of {date,durations}
    //     dailyRate:this.calculateDailyRate(),
    //     weeklyRate:this.calculateWeeklyRate(),
    //     monthlyRate:this.calculatMonthklyRate(),
    //     username:e.username,
    //     title:e.job
    //   };
    // });
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
  openHistory(emp) {
    let empoloyeeHistory=emp.activities;
    let ref = this.dialogService.open(EmployeeHistoryComponent,);
    ref.componentRef.instance.empoloyeeHistory = empoloyeeHistory;
    ref.componentRef.instance.employeeName = emp.username;
    ref.componentRef.changeDetectorRef.detectChanges();
  }
}
