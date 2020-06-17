import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  facebokInfo:{name,value,icon}[] =  [
    {
      name:'Engagment',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-users"
    },
    {
      name:'Likes',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-thumbs-up"
    },
    {
      name:'Reach',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-project-diagram"
    },
    {
      name:'Messages',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-comments"
    },
    {
      name:'Clicks',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-mouse-pointer"
    },
    {
      name:'Posts',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-pager"
    },

  ];

  twitterInfo:{name,value,icon}[] =  [
    {
      name:'Retweets',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-retweet"
    },
    {
      name:'Engagment',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-users"
    },
    {
      name:'Likes',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-thumbs-up"
    },
    {
      name:'Impressions',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-project-diagram"
    },
    {
      name:'Clicks',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-mouse-pointer"
    },
    {
      name:'Posts',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-pager"
    },

  ];

  youtubeInfo:{name,value,icon}[] =  [
    {
      name:'Subscribers',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-users"
    },
    {
      name:'Likes',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-thumbs-up"
    },
    {
      name:'Views',
      value:this.getRandomIntInclusive(100,100000),
      icon:"fas fa-eye"
    },
    {
      name:'Videos',
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
