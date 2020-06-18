import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:{email,password,rememberMe:boolean} = {email:null,password:null,rememberMe:false};
  rememberMe:boolean=false;
  submitted=false;
  constructor() { }

  ngOnInit(): void {
  }
  login(){
    this.submitted=true;
  }
}
