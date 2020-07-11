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

  async getNews(recentFirst:boolean = true): Promise<any> {
    let res = await this.http.get<[]>(`${this.disk.baseUrl}/texts`, this.header).toPromise();
    return res.reverse();
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
