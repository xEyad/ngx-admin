import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-employee-history',
  templateUrl: './employee-history.component.html',
  styleUrls: ['./employee-history.component.scss']
})
export class EmployeeHistoryComponent implements OnInit {

  constructor(
    protected dialogRef: NbDialogRef<any>,
    private employeeService:EmployeeService
    ) {

    }
  empoloyeeHistory=[];
  employeeName:string="";
  async ngOnInit()
  {
  }

  close() {
    this.dialogRef.close();
  }
}
