import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-update-user-password',
  templateUrl: './update-user-password.component.html',
  styleUrls: ['./update-user-password.component.scss']
})
export class UpdateUserPasswordComponent implements OnInit {
  theEmail;
  newPassword;
  constructor() { }

  ngOnInit(): void {
  }
  update(){
  }
}
