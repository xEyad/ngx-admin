import { NbToastrService } from '@nebular/theme';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit
{
  currentPd:string="";
  newPd:string="";

  constructor(
    private auth:AuthenticationService,
    private toast:NbToastrService
    ) { }

  ngOnInit(): void {
  }
  async reset()
  {
    try{
      await this.auth.resetCurrentUserPassword(this.currentPd,this.newPd);
      this.toast.success('تمت العملية بنجاح',"نجاح");
    }
    catch(e)
    {
      console.log(e);

      this.toast.danger(e.error.message,"فشل");
    }
  }
}
