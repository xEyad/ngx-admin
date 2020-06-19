import { DiskService } from './../../../services/disk.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:{email,password,type} = {email:null,password:"123456",type:null};
  constructor(
    private router:Router,
    private auth:AuthenticationService,
    private toast:NbToastrService
    ) { }

  ngOnInit(): void {
  }
  async register()
  {
    try{
      await this.auth.createUser(this.user.email,this.user.type,this.user.password);
      this.toast.success("Account created",'Success');
    }
    catch(e)
    {
      this.toast.danger(e.error,'Failed');
    }
  }

}
