import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DiskService } from './disk.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private disk:DiskService,
    private http: HttpClient
    ) { }

  async getNews(): Promise<any> {
    return this.http.get(`${this.disk.baseUrl}/texts`, this.header).toPromise();
  }
  async addNews(string:string): Promise<any> {
    return this.http.post(`${this.disk.baseUrl}/texts`,{text:string}, this.header,).toPromise();
  }
  private get header(): { 'headers': HttpHeaders } {
    let h = new HttpHeaders({
      'Authorization': this.disk.userToken
    });
    return { 'headers': h };
  }
}
