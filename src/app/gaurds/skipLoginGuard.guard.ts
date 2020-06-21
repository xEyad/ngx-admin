import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import { UsersService } from '../services/users.service';
@Injectable()
export class SkipLoginGuard  implements CanActivate
{
  constructor(private userService: UsersService,private router:Router) {};
  async canActivate()
  {
    try{
      const user = await this.userService.getCurrentUser();
      if(user == undefined)
        return false
      else
      {
        this.router.navigateByUrl('/pages/dashboard');
        return true;
      }
    }catch(e)
    {
      return false
    }
  }
}
