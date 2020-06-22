import { DiskService } from './../../services/disk.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  userRole="";
  constructor(private disk:DiskService)
  {
    this.userRole = disk.currentUserType.toLocaleLowerCase();
  }
  ngOnInit()
  {

  }
  facebokInfo:{name,value,icon}[] =  [
    {
      name:'تفاعل',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-users"
    },
    {
      name:'أعجاب',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-thumbs-up"
    },
    {
      name:'نفوذ',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-project-diagram"
    },
    {
      name:'رسالة',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-comments"
    },
    {
      name:'نقرة',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-mouse-pointer"
    },
    {
      name:'منشور',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-pager"
    },

  ];

  twitterInfo:{name,value,icon}[] =  [
    {
      name:'أعادة تغريد',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-retweet"
    },
    {
      name:'تفاعل',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-users"
    },
    {
      name:'أعجاب',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-thumbs-up"
    },
    {
      name:'أنطباع',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-project-diagram"
    },
    {
      name:'نقرة',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-mouse-pointer"
    },
    {
      name:'منشور',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-pager"
    },

  ];

  youtubeInfo:{name,value,icon}[] =  [
    {
      name:'متابعين',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-users"
    },
    {
      name:'أعجاب',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-thumbs-up"
    },
    {
      name:'مشاهدات',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-eye"
    },
    {
      name:'مقطع فيديو',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-video"
    },

  ];

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
}
