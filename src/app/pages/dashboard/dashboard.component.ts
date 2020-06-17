import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  facebokInfo:{name,value,icon}[] =  [
    {
      name:'Engagment',
      value:"450,560",
      icon:"fas fa-users"
    },
    {
      name:'Likes',
      value:"560",
      icon:"fas fa-thumbs-up"
    },
    {
      name:'Reach',
      value:"560",
      icon:"fas fa-project-diagram"
    },
    {
      name:'Messages',
      value:"560",
      icon:"fas fa-comments"
    },
    {
      name:'Clicks',
      value:"560",
      icon:"fas fa-mouse-pointer"
    },
    {
      name:'Posts',
      value:"560",
      icon:"fas fa-pager"
    },

  ];

  twitterInfo:{name,value,icon}[] =  [
    {
      name:'Retweets',
      value:"450,560",
      icon:"fas fa-retweet"
    },
    {
      name:'Engagment',
      value:"450,560",
      icon:"fas fa-users"
    },
    {
      name:'Likes',
      value:"560",
      icon:"fas fa-thumbs-up"
    },
    {
      name:'Impressions',
      value:"560",
      icon:"fas fa-project-diagram"
    },
    {
      name:'Clicks',
      value:"560",
      icon:"fas fa-mouse-pointer"
    },
    {
      name:'Posts',
      value:"560",
      icon:"fas fa-pager"
    },

  ];

  youtubeInfo:{name,value,icon}[] =  [
    {
      name:'Subscribers',
      value:"450,560",
      icon:"fas fa-users"
    },
    {
      name:'Likes',
      value:"560",
      icon:"fas fa-thumbs-up"
    },
    {
      name:'Views',
      value:"560",
      icon:"fas fa-eye"
    },
    {
      name:'Videos',
      value:"560",
      icon:"fas fa-video"
    },

  ];
}
