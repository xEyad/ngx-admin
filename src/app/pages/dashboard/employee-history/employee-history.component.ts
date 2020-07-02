import { Utility } from './../../../models/utility';
import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit, Input } from '@angular/core';
const e2a = s => s.replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);

@Component({
  selector: 'ngx-employee-history',
  templateUrl: './employee-history.component.html',
  styleUrls: ['./employee-history.component.scss']
})
export class EmployeeHistoryComponent implements OnInit {

  constructor(
    private employeeService:EmployeeService
    ) {

    }
  @Input() empoloyeeHistory=[];
  async ngOnInit()
  {
    this.empoloyeeHistory = this.empoloyeeHistory.reverse();
  }
  parseTime(time)
  {
    return Utility.minutesToHHMM(time);
  }
  parseDate(string)
  {
    let d = new Date(string);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('ar-EG', options);
  }
}
