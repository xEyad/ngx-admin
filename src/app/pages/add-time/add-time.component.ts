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
  setDuration(time)
  {
    this.duration=time;
    console.log(time);

  }
  async add()
  {
    try{
      await this.employeeService.addActivity(this.duration.toString(),this.activity);
      this.toast.success('تم الأضافة بنجاح',"نجاح");
    }catch(e)
    {
      this.toast.danger(e.error.error,"فشل");
    }
  }
  ngOnInit(): void {
  }

}
