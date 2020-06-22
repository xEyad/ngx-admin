import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiskService
{
  clearCurrentuserId()
  {
    localStorage.removeItem(this.currentUserIdKey);
  }
  clearCurrentuserToken()
  {
    localStorage.removeItem(this.currentUserTokenKey);
  }

  get baseUrl()
  {
    return 'https://edugram-dashboard.herokuapp.com';
  }

  get currentUserId()
  {
    return localStorage.getItem(this.currentUserIdKey);
  }
  set currentUserId(id)
  {
    localStorage.setItem(this.currentUserIdKey,id);
  }
  private currentUserIdKey = "id";

  get userToken()
  {
    return localStorage.getItem(this.currentUserTokenKey);
  }
  set userToken(token)
  {
    localStorage.setItem(this.currentUserTokenKey,token);
  }
  private currentUserTokenKey = "userToken";

  get userName()
  {
    return localStorage.getItem(this.currentUserNameKey);
  }
  set userName(name)
  {
    localStorage.setItem(this.currentUserNameKey,name);
  }
  private currentUserNameKey = "userName";

  get job()
  {
    return localStorage.getItem(this.currentJobKey);
  }
  set job(job)
  {
    localStorage.setItem(this.currentJobKey,job);
  }
  private currentJobKey = "job";

  get currentUserType()
  {
    return localStorage.getItem('type');
  }
  set currentUserType(type)
  {
    localStorage.setItem('type',type);
  }
  constructor() { }
}
