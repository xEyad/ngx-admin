import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:{email,password,type,username,job} = {email:null,password:"123456",type:null,username:null,job:""};
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
      if(this.user.type=="dataEntry")
        this.user.job = 'مدخل بيانات';
      else if(this.user.type=="admin")
        this.user.job = 'مشرف';
      await this.auth.createUser(this.user.email,this.user.type,this.user.password,this.user.username,this.user.job);
      this.toast.success("تم التسجيل بنجاح",'نجاح');
    }
    catch(e)
    {
      this.toast.danger(e.error.error,'فشل');
    }
  }

}
