import { NbToastrService } from '@nebular/theme';
import { DiskService } from './../../services/disk.service';
import { StatsticsService } from './../../services/statstics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-upload-statstics',
  templateUrl: './upload-statstics.component.html',
  styleUrls: ['./upload-statstics.component.scss']
})
export class UploadStatsticsComponent implements OnInit {

  file;
  constructor( private statsticsService:StatsticsService,
    public disk:DiskService,
    private toast:NbToastrService) { }

  ngOnInit(): void {
  }
  fileChange(event)
  {
    console.log(event.target.files);
    this.file = event.target.files[0];
  }
  async upload()
  {
    try
    {
      await this.statsticsService.uploadStatstics(this.file);
      this.toast.success('تمت العملية بنجاح','نجاح');
    }catch(e)
    {
      this.toast.danger('فشلت العملية','فشل');
    }
  }
}
