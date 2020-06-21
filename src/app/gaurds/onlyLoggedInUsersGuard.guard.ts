import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import { UsersService } from '../services/users.service';
@Injectable()
export class OnlyLoggedInUsersGuard  implements CanActivate
{
  constructor(private userService: UsersService,private router:Router) {};
  async canActivate()
  {
    try{
      const user = await this.userService.getCurrentUser();
      if(user == undefined)
      {
        this.router.navigateByUrl('/login');
        return false;
      }
      else
        return true;

    }catch(e)
    {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
