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

  constructor() { }

  ngOnInit(): void {
  }
  reset(){

  }
}
