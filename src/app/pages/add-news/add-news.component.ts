import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  curDate;
  text: string;
  constructor() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.curDate = (new Date()).toLocaleString('ar-EG',options);
  }

  ngOnInit(): void {
  }
  addNews()
  {

  }
}
