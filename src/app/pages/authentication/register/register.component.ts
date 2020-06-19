import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:{email,password,type} = {email:null,password:"123456",type:null};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    this.router.navigateByUrl('pages');
  }

}
