import { DiskService } from './../services/disk.service';
import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import { UsersService } from '../services/users.service';
@Injectable()
export class SkipLoginGuard  implements CanActivate
{
  constructor( private disk: DiskService,private userService: UsersService,private router:Router) {};

  async canActivate()
  {
    try{


      if(this.disk.userToken==null )
        return true
      else
      {
        const user = await this.userService.getCurrentUser();
        if( user != undefined)
        {
          this.router.navigateByUrl('/pages/dashboard');
          return false;
        }
      }
    }catch(e)
    {
      return true
    }
  }
}
