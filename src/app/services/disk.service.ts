import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiskService {
  get baseUrl()
  {
    return 'https://edugram-dashboard.herokuapp.com';
  }
  get userToken()
  {
    return localStorage.getItem('token');
  }
  set userToken(token)
  {
    localStorage.setItem('token',token);
  }

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
