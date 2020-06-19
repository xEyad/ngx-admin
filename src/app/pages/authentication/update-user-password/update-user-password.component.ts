import { NbToastrService } from '@nebular/theme';
import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-update-user-password',
  templateUrl: './update-user-password.component.html',
  styleUrls: ['./update-user-password.component.scss']
})
export class UpdateUserPasswordComponent implements OnInit {
  theEmail;
  newPassword;
  constructor(
    private auth:AuthenticationService,
    private toast:NbToastrService
  ) { }

  ngOnInit(): void {
  }
  async update()
  {
    try{
      await this.auth.updateUserPassword(this.theEmail,this.newPassword);
      this.toast.success("Password updated","Success");
    }
    catch(e)
    {
      this.toast.danger(e.error.error.message,"Fail");
    }

  }
}
