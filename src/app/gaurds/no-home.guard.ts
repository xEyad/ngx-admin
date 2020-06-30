import { DiskService } from './../services/disk.service';
import { UsersService } from './../services/users.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoHomeGuard implements CanActivate {
  constructor(private disk: DiskService,private router:Router){}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      if(this.disk.currentUserType != "admin" && this.disk.currentUserType != "investor")
      {
        this.router.navigateByUrl('pages/addTime');
        return false;
      }
      else
      {

        return true;
      }
  }

}
