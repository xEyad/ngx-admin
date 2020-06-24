import { NbToastrService } from '@nebular/theme';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-upload-finances',
  templateUrl: './upload-finances.component.html',
  styleUrls: ['./upload-finances.component.scss']
})
export class UploadFinancesComponent implements OnInit {
  finances:any[];
  theAddRecord={item:"",price:"",editMode:false};
  income;
  constructor(
    private itemsService:ItemsService,
    private toast:NbToastrService
  )
  {
  }
  async ngOnInit() {
    this.updateFinances();
    this.income = await this.itemsService.getIncome();
  }
  async updateFinances()
  {
    try{
      let items = await this.itemsService.getItems();
      this.finances = items.map((f)=>{return {item:f.item,price:f.price,editMode:false}});
    }
    catch(e)
    {
      this.toast.danger('فشل في أحضار المعلومات','فشل');
    }
  }
  async addRecord(record)
  {
    try{
      await this.itemsService.addItem(this.theAddRecord.item,this.theAddRecord.price.toString());
      this.finances.reverse;
      this.theAddRecord={item:"",price:"",editMode:false};
      this.toast.success('تم الأضافة بنجاح',"نجاح");
    }catch(e)
    {
      this.toast.danger('فشلت العلمية',"فشل");
    }
  }
  enterEditMode(record)
  {
    record.editMode = true;
  }
  updateRecord(record)
  {
    record.editMode = false;
  }
  isValid(record)
  {
    return (
      !this.isEmpty(record.price) &&
      !this.isEmpty(record.item) &&
      !isNaN(parseFloat(record.price))
    );
  }
  async updateIncome()
  {
    try{
      await this.itemsService.addIncome(this.income);
      this.toast.success('تم الأضافة بنجاح',"نجاح");
    }catch(e)
    {
      this.toast.danger('فشلت العلمية',"فشل");
    }
  }
  private isEmpty(string)
  {
    return string==null || string=="";
  }
}
