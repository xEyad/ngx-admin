import { NbToastrService } from '@nebular/theme';
import { EmployeeService } from './../../services/employee.service';
import { DiskService } from './../../services/disk.service';
import { Component, OnInit } from '@angular/core';
const arabicToEnglish = s => s.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
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
    time = arabicToEnglish(time);
    let d = time.split(':');
    let mins = Number(d[0])*60 + Number(d[1]);
    this.duration=mins;
    console.log(`time: ${time}. duration:${mins}`);
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
