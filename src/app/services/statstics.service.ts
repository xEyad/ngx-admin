import { DiskService } from './disk.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsticsService {

  constructor(private disk:DiskService,
    private http:HttpClient) { }

    async uploadStatstics(file)
  {
    let formData:FormData = new FormData();
    formData.append('file',file,'statstics.xlsx');

    return await this.http.post<any>(`${this.disk.baseUrl}/stats`,formData,this.header).toPromise();
  }
  private get header(): { 'headers': HttpHeaders } {
    let h = new HttpHeaders({
      'Authorization': this.disk.userToken,
    });
    return { 'headers': h };
  }
}
