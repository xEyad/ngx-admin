import { NbToastrService } from '@nebular/theme';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  curDate;
  text: string;
  constructor(private newsService:NewsService,private toast:NbToastrService) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.curDate = (new Date()).toLocaleString('ar-EG',options);
  }

  ngOnInit(): void {
  }
  async addNews()
  {
    try{
      await this.newsService.addNews(this.text);
      this.toast.success("تم الأضافة بنجاح","نجاح");

    }catch(e)
    {
      this.toast.success(e['error']['error'],"فشل");

    }
  }
}
