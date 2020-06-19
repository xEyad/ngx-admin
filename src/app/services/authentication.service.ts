import { DiskService } from './disk.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  }

  async updateUserPassword(email:string,newPassword:string) : Promise<any>
  {
    let payload = {
      "email": email,
      "newPassword": newPassword,
    };
    return this.http.post(`${this.disk.baseUrl}/users/updatePassword`,payload).toPromise();
  }
}
