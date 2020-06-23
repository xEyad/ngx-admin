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
    return await this.http.get<{date,activity}[]>(`${this.disk.baseUrl}/activities/${userID}`,this.header).toPromise();
  }
  addActivity(duration:string,activity:string) : Promise<any>
  {
    const payload = {
      duration:duration,
      activity:activity
    }
    return this.http.post(`${this.disk.baseUrl}/activities`,payload,this.header).toPromise();
  }

  private get header():{'headers':HttpHeaders}{
    let h =  new HttpHeaders({
      'Authorization':this.disk.userToken
    });
    return {'headers':h};
  }
}
