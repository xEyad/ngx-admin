import { DiskService } from './disk.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private disk:DiskService,
    private http:HttpClient
    ) { }
  async getCurrentUser() : Promise<any>
  {
    return this.http.get(`${this.disk.baseUrl}/users/${this.disk.currentUserId}`,this.header).toPromise();
  }

  private get header():{'headers':HttpHeaders}{
    let h =  new HttpHeaders({
      'Authorization':this.disk.userToken
    });
    return {'headers':h};
  }
}
