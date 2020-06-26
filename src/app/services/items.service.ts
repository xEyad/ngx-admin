import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DiskService } from './disk.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private disk:DiskService,
    private http:HttpClient)
  {}

  async getItems() : Promise<{ _id: string,
    item: string,
    price: string,}[]>
  {
    return await this.http.get<any>(`${this.disk.baseUrl}/items`,this.header).toPromise();
  }
  async addItem(name,price)
  {
    const payload = {
      "item": name,
      "price": price
    };
    return this.http.post(`${this.disk.baseUrl}/items`,payload,this.header).toPromise();
  }
  async updateItem(itemId,name,price)
  {
    const payload = {
      "item": name,
      "price": price
    };
    return this.http.put(`${this.disk.baseUrl}/items/${itemId}`,payload,this.header).toPromise();
  }
  async deleteItem(itemId)
  {
    return this.http.delete(`${this.disk.baseUrl}/items/${itemId}`,this.header).toPromise();
  }
  async getIncome() : Promise<number>
  {
    let res=  await this.http.get<any>(`${this.disk.baseUrl}/income`,this.header).toPromise();
    return res.totalIncome;
  }
  async addIncome(income)
  {
    const payload = {
      "income": income,
    };
    return this.http.post(`${this.disk.baseUrl}/income`,payload,this.header).toPromise();
  }
  private get header(): { 'headers': HttpHeaders } {
    let h = new HttpHeaders({
      'Authorization': this.disk.userToken
    });
    return { 'headers': h };
  }
}
