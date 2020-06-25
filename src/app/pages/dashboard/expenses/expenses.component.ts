import { ItemsService } from './../../../services/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  income=0;
  expenses = 0;
  constructor(private items:ItemsService) { }

  async ngOnInit() {
    this.income = await this.items.getIncome() || 0;
    let items = await this.items.getItems();

    for (const item of items) {
      this.expenses += Number(item.price);
    }
  }
  getPercentageOfTotal(value)
  {
    let total = this.income+this.expenses;
    return (value * 100) / total;
  }
}
