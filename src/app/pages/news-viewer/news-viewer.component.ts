import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-news-viewer',
  templateUrl: './news-viewer.component.html',
  styleUrls: ['./news-viewer.component.scss']
})
export class NewsViewerComponent implements OnInit {
  config ;
  news:{text,_id,date}[];
  constructor(private newsService:NewsService) {

  }

  async ngOnInit() {
    this.news = await this.newsService.getNews();
    this.config = {
      itemsPerPage: 1,
      currentPage: 1,
      totalItems: this.news.length
    };
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  parseDate(string)
  {
    let d = new Date(string);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('ar-EG', options);
  }
}
