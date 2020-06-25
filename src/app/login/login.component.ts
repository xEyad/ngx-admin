import { AuthenticationService } from './../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:{email,password,rememberMe:boolean} = {email:null,password:null,rememberMe:false};
  rememberMe:boolean=false;
  submitted=false;
  constructor(
    private router:Router,
    private auth:AuthenticationService,
    private directionService:NbLayoutDirectionService,
    private toast:NbToastrService
    ) { }

  ngOnInit(): void {
    this.directionService.setDirection(NbLayoutDirection.RTL);
  }
  async login()
  {
    try{
      await this.auth.loginUser(this.user.email,this.user.password);
      this.submitted=true;
      this.router.navigateByUrl('pages');
    }
    catch(e)
    {
      this.toast.danger(e.error.error.message,'Failed');
    }
  }
}
