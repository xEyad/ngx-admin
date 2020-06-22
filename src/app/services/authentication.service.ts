import { DiskService } from './disk.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http:HttpClient,
    private disk:DiskService
    ) { }

  async createUser(email:string,role:string,password:string) : Promise<any>
  {
    let payload = {
      "email": email,
      "password": password,
      "type": role
    }
    return this.http.post(`${this.disk.baseUrl}/users`,payload).toPromise();
  }

  async loginUser(email:string,password:string) : Promise<any>
  {
    let payload = {
      "email": email,
      "password": password,
    }
    let data = await this.http.post(`${this.disk.baseUrl}/users/login`,payload).toPromise<any>();
    this.disk.userToken = data.token;
    this.disk.currentUserType = data.responseUser.type;
    this.disk.currentUserId = data.responseUser._id;
    this.disk.userName = data.responseUser.username;
  }

  //NEEDS API UPDATE
  async updateUserPassword(email:string,newPassword:string) : Promise<any>
  {
    let payload = {
      "email": email,
      "newPassword": newPassword,
    };
    return this.http.post(`${this.disk.baseUrl}/users/updatePassword`,payload,this.header).toPromise();
  }

  async resetCurrentUserPassword(oldPassword:string,newPassword:string):Promise<any>
  {
    let payload = {
      "oldPassword": oldPassword,
      "newPassword": newPassword,
    };
    return this.http.post(`${this.disk.baseUrl}/users/${this.disk.currentUserId}/resetPassword`,payload,this.header).toPromise();
  }

  async logout()
  {
    this.disk.clearCurrentuserToken();
    this.disk.clearCurrentuserId();
  }

  private get header():{'headers':HttpHeaders}{
    let h =  new HttpHeaders({
      'Authorization':this.disk.userToken
    });
    return {'headers':h};
  }
}
