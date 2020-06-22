import { NbToastrService } from '@nebular/theme';
import { EmployeeService } from './../../services/employee.service';
import { DiskService } from './../../services/disk.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-time',
  templateUrl: './add-time.component.html',
  styleUrls: ['./add-time.component.scss']
})
export class AddTimeComponent implements OnInit {

  duration;
  activity;
  constructor(
    public disk:DiskService,
    private toast:NbToastrService,
    private employeeService:EmployeeService
    ) { }
  validateNumber()
  {
    if(isNaN(this.duration))
    {
      this.duration = null;
      return;
    }
    this.duration = Math.max(0,this.duration);
    this.duration = Math.min(24,this.duration);

  }
  async add()
  {
    try{
      await this.employeeService.addActivity(this.duration,this.activity);
      this.toast.success('تم الأضافة بنجاح',"نجاح");
    }catch(e)
    {
      this.toast.danger(e.error.error,"فشل");
    }
  }
  ngOnInit(): void {
  }

}
