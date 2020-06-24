import { DiskService } from './disk.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private disk:DiskService,
    private http:HttpClient
    ) { }

  //should be employees based
  async getActivities(userID) : Promise<{date,activity}[]>
  {
    let res = await this.http.get<any>(`${this.disk.baseUrl}/users/${userID}/activity`,this.header).toPromise();
    return res.activities;
  }
  addActivity(duration:string,activity:string) : Promise<any>
  {
    const payload = {
      duration:duration,
      activity:activity
    }
    let userID = this.disk.currentUserId;
    return this.http.post(`${this.disk.baseUrl}/users/${userID}/activity`,payload,this.header).toPromise();
  }

  private get header():{'headers':HttpHeaders}{
    let h =  new HttpHeaders({
      'Authorization':this.disk.userToken
    });
    return {'headers':h};
  }
}
