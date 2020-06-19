import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-upload-finances',
  templateUrl: './upload-finances.component.html',
  styleUrls: ['./upload-finances.component.scss']
})
export class UploadFinancesComponent implements OnInit {
  finances:any[]=Array(0).fill({item:'asd',price:123});
  theAddRecord={item:"",price:"",editMode:false};

  constructor() { }
  ngOnInit(): void {
    this.updateFinances();
  }
  updateFinances(){
    this.finances = this.finances.map((f)=>{return {item:f.item,price:f.price,editMode:false}});
  }
  addRecord(record)
  {
    this.finances.unshift(record);
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
  private isEmpty(string)
  {
    return string==null || string=="";
  }
}
