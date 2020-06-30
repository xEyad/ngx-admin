import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

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

  }
  parseDate(string)
  {
    let d = new Date(string);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('ar-EG', options);
  }
}
