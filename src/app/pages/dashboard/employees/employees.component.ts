import { Utility } from './../../../models/utility';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeHistoryComponent } from '../employee-history/employee-history.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'ngx-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: any[];
  selectedDuration: string = 'Daily';
  viewedDuration: string = 'day';
  selectedEmployee: any;
  showHistory: boolean;
  employeePortal;
  constructor(
    private usersService: UsersService,
  ) { }

  async ngOnInit() {
    this.employees = await this.usersService.getUsers();
    console.log('employees', this.employees);

    this.employees = this.employees.filter((e) => e.type == "dataEntry" || e.type == "employee");
    this.employees = this.employees.map((e) => {
      return {
        //array of {date,durations}
        dailyRate: Utility.minutesToHHMM(this.totalHoursInRecentDay(<any>e.activities)),
        weeklyRate: Utility.minutesToHHMM(this.totalHoursInRecentWeek(<any>e.activities)),
        monthlyRate: Utility.minutesToHHMM(this.totalHoursInRecentMonth(<any>e.activities)),
        username: e.username,
        title: e.job,
        activities: e.activities
      };
    });
    this.employeePortal = new ComponentPortal(EmployeeHistoryComponent);
  }
  totalHoursInRecentDay(data: { date, duration }[]) {
    try {
      data = data.reverse();
      let date = data[0].date;
      data = data.filter((el) => new Date(el.date).getDay() == new Date(date).getDay());
      let mins = 0;
      for (const emp of data) {
        mins += parseInt(emp.duration);
      }
      return mins;
    } catch (e) {
      console.error(e)
      return 0;
    }

  }
  totalHoursInRecentWeek(data: { date, duration }[]) {
    try {
      data = data.reverse().slice(0, 7);

      let mins = 0;
      for (const emp of data) {
        mins += parseInt(emp.duration);
      }
      return mins;

    } catch (e) {
      console.error(e)
      return 0;
    }
  }
  totalHoursInRecentMonth(data: { date, duration }[]) {
    try {
      data = data.reverse();
      let date = data[0].date;
      data = data.filter(
        (el) =>
          (new Date(el.date).getMonth() == new Date(date).getMonth()) &&
          (new Date(el.date).getFullYear() == new Date(date).getFullYear())
      );
      let mins = 0;
      for (const emp of data) {
        mins += parseInt(emp.duration);
      }
      return mins;
    } catch (e) {
      console.error(e)
      return 0;
    }
  }

  changeDuration(selection: string) {
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
  }
}
