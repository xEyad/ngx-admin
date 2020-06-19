import { Component, OnInit, Input } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-employee-history',
  templateUrl: './employee-history.component.html',
  styleUrls: ['./employee-history.component.scss']
})
export class EmployeeHistoryComponent implements OnInit {

  constructor(protected dialogRef: NbDialogRef<any>) { }
  empoloyeeHistory:{date,timeWorked,activity}[]=[];
  employeeName:string="";
  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
