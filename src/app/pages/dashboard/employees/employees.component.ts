import { Utility } from './../../../models/utility';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbDialogRef } from '@nebular/theme';
import { EmployeeHistoryComponent } from '../employee-history/employee-history.component';
import { NumberSymbol } from '@angular/common';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'ngx-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees:any[];
  selectedDuration:string = 'Daily';
  viewedDuration:string = 'day';
  selectedEmployee:any;
  showHistory: boolean;
  employeePortal;
  constructor(
    // private dialogService: NbDialogService,
    private usersService:UsersService,
    private overlay: Overlay
    ) { }

  async ngOnInit()
  {
    this.employees = await this.usersService.getUsers();
    this.employees = this.employees.filter((e)=>e.type=="dataEntry" || e.type=="employee");
    this.employees = this.employees.map((e)=>{
      return {
        //array of {date,durations}
        dailyRate:this.calculateDailyRate(<any>e.activities),
        weeklyRate:this.calculateWeeklyRate(<any>e.activities),
        monthlyRate:this.calculatMonthklyRate(<any>e.activities),
        username:e.username,
        title:e.job,
        activities:e.activities
      };
    });
    this.employeePortal = new ComponentPortal(EmployeeHistoryComponent);
    const overlayRef = this.overlay.create({  });
  }
  calculateDailyRate(data:{date,duration}[])
  {
    let avg = Utility.average(data.map((e)=>parseInt(e.duration)))
    return Math.floor(avg);
  }
  calculateWeeklyRate(data:{date,duration}[])
  {
    let nums = data.map((e)=>e.duration);
    let weeks = Math.floor(nums.length/7);
    if(weeks==0)
      return 0;
    let weeklyAvg = (this.calculateDailyRate(data)*7) / weeks;
    return Math.floor(weeklyAvg);
  }
  calculatMonthklyRate(data:{date,duration}[])
  {
    let nums = data.map((e)=>e.duration);
    let months = Math.floor(nums.length/30);
    if(months==0)
      return 0;
    let monthlyAvg = (this.calculateDailyRate(data)*30) / months;
    return Math.floor(monthlyAvg);
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
    this.showHistory = true;
    this.selectedEmployee = emp;
    // let empoloyeeHistory=emp.activities;
    // let ref = this.dialogService.open(EmployeeHistoryComponent,{
    //   context:{
    //   empoloyeeHistory:empoloyeeHistory,
    //   employeeName:emp.usernamme
    //   }
    // });
    // ref.componentRef.instance.empoloyeeHistory = empoloyeeHistory;
    // ref.componentRef.instance.employeeName = emp.username;
    // ref.componentRef.changeDetectorRef.detectChanges();
  }
}
