import { StatsticsService } from './../../services/statstics.service';
import { Utility } from './../../models/utility';

import { DiskService } from './../../services/disk.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  userRole="";
  stats;
  fbLikes=0;
  twitterRetweets=0;
  youtubeFollowers=0;
  twitterDifference=0;
  youtubeDifference=0;
  fbDifference=0;
  facebokInfo:{name,value,icon}[];
  twitterInfo:{name,value,icon}[];
  youtubeInfo:{name,value,icon}[];
  constructor(
    private disk:DiskService,
    private statsService:StatsticsService
    )
  {
    this.userRole = disk.currentUserType.toLocaleLowerCase();
  }
  async ngOnInit()
  {
    console.log(await this.statsService.getStatstics());
    this.stats = await this.statsService.getStatstics();
    this.fillInfo();
    this.youtubeFollowers = Utility.getAllOfKey(this.stats,'Youtube Followers')[Utility.getAllOfKey(this.stats,'Youtube Followers').length-1];
    this.twitterRetweets = Utility.getAllOfKey(this.stats,'Twitter Retweets')[Utility.getAllOfKey(this.stats,'Twitter Retweets').length-1];
    this.fbLikes = Utility.getAllOfKey(this.stats,'Facebook Likes')[Utility.getAllOfKey(this.stats,'Facebook Likes').length-1];

    this.twitterDifference = Utility.getDifferenceFromLastWeek(Utility.getAllOfKey(this.stats,'Twitter Retweets'));
    this.youtubeDifference = Utility.getDifferenceFromLastWeek(Utility.getAllOfKey(this.stats,'Youtube Followers'));
    this.fbDifference = Utility.getDifferenceFromLastWeek(Utility.getAllOfKey(this.stats,'Facebook Likes'));

  }
  fillInfo()
  {
    this.facebokInfo=  [
      {
        name:'تفاعل',
        value:Utility.getAllOfKey(this.stats,'Facebook Interactions')[Utility.getAllOfKey(this.stats,'Facebook Interactions').length-1],
        icon:"fas fa-users"
      },
      {
        name:'أعجاب',
        value:Utility.getAllOfKey(this.stats,'Facebook Likes')[Utility.getAllOfKey(this.stats,'Facebook Likes').length-1],
        icon:"fas fa-thumbs-up"
      },
      {
        name:'نفوذ',
        value:Utility.getAllOfKey(this.stats,'Facebook Influences')[Utility.getAllOfKey(this.stats,'Facebook Influences').length-1],
        icon:"fas fa-project-diagram"
      },
      {
        name:'رسالة',
        value:Utility.getAllOfKey(this.stats,'Facebook Messages')[Utility.getAllOfKey(this.stats,'Facebook Messages').length-1],
        icon:"fas fa-comments"
      },
      {
        name:'نقرة',
        value:Utility.getAllOfKey(this.stats,'Facebook Clicks')[Utility.getAllOfKey(this.stats,'Facebook Clicks').length-1],
        icon:"fas fa-mouse-pointer"
      },
      {
        name:'منشور',
        value:Utility.getAllOfKey(this.stats,'Facebook Posts')[Utility.getAllOfKey(this.stats,'Facebook Posts').length-1],
        icon:"fas fa-pager"
      },

    ];

    this.twitterInfo =  [
      {
        name:'أعادة تغريد',
        value:Utility.getAllOfKey(this.stats,'Twitter Retweets')[Utility.getAllOfKey(this.stats,'Twitter Retweets').length-1],
        icon:"fas fa-retweet"
      },
      {
        name:'تفاعل',
        value:Utility.getAllOfKey(this.stats,'Twitter Interactions')[Utility.getAllOfKey(this.stats,'Twitter Interactions').length-1],
        icon:"fas fa-users"
      },
      {
        name:'أعجاب',
        value:Utility.getAllOfKey(this.stats,'Twitter Likes')[Utility.getAllOfKey(this.stats,'Twitter Likes').length-1],
        icon:"fas fa-thumbs-up"
      },
      {
        name:'أنطباع',
        value:Utility.getAllOfKey(this.stats,'Twitter Impressions')[Utility.getAllOfKey(this.stats,'Twitter Impressions').length-1],
        icon:"fas fa-project-diagram"
      },
      {
        name:'نقرة',
        value:Utility.getAllOfKey(this.stats,'Twitter Clicks')[Utility.getAllOfKey(this.stats,'Twitter Clicks').length-1],
        icon:"fas fa-mouse-pointer"
      },
      {
        name:'منشور',
        value:Utility.getAllOfKey(this.stats,'Twitter Posts')[Utility.getAllOfKey(this.stats,'Twitter Posts').length-1],
        icon:"fas fa-pager"
      },

    ];

    this.youtubeInfo=  [
      {
        name:'متابع',
        value:Utility.getAllOfKey(this.stats,'Youtube Followers')[Utility.getAllOfKey(this.stats,'Youtube Followers').length-1],
        icon:"fas fa-users"
      },
      {
        name:'أعجاب',
        value:Utility.getAllOfKey(this.stats,'Youtube Likes')[Utility.getAllOfKey(this.stats,'Youtube Likes').length-1],
        icon:"fas fa-thumbs-up"
      },
      {
        name:'مشاهدة',
        value:Utility.getAllOfKey(this.stats,'Youtube Views')[Utility.getAllOfKey(this.stats,'Youtube Views').length-1],
        icon:"fas fa-eye"
      },
      {
        name:'مقطع فيديو',
        value:Utility.getAllOfKey(this.stats,'Youtube Videos')[Utility.getAllOfKey(this.stats,'Youtube Videos').length-1],
        icon:"fas fa-video"
      },

    ];
  }

  abs(value)
  {
    return Math.abs(value);
  }


  isIncreasing(value)
  {
    return value>0;
  }

}


const statstics = Array(26).fill(
  {
    "statistics": [
      {
        "Date": "2020-06-25T18:34:50.675Z",
        "Facebook Interactions":  Utility.getRandomIntInclusive(100,9999),
        "Facebook Likes":  Utility.getRandomIntInclusive(100,9999),
        "Facebook Influences":  Utility.getRandomIntInclusive(100,9999),
        "Facebook Messages":  Utility.getRandomIntInclusive(100,9999),
        "Facebook Clicks":  Utility.getRandomIntInclusive(100,9999),
        "Facebook Posts":  Utility.getRandomIntInclusive(100,9999),
        "Twitter Retweets":  Utility.getRandomIntInclusive(100,9999),
        "Twitter Interactions":  Utility.getRandomIntInclusive(100,9999),
        "Twitter Likes":  Utility.getRandomIntInclusive(100,9999),
        "Twitter Impressions":  Utility.getRandomIntInclusive(100,9999),
        "Twitter Clicks":  Utility.getRandomIntInclusive(100,9999),
        "Twitter Posts":  Utility.getRandomIntInclusive(100,9999),
        "Youtube Followers":  Utility.getRandomIntInclusive(100,9999),
        "Youtube Likes":  Utility.getRandomIntInclusive(100,9999),
        "Youtube Views":  Utility.getRandomIntInclusive(100,9999),
        "Youtube Videos":  Utility.getRandomIntInclusive(100,9999),
        "Registered Students":  Utility.getRandomIntInclusive(100,9999),
        "Premium Registered Students":  Utility.getRandomIntInclusive(100,9999),
        "Camps Under Review":  Utility.getRandomIntInclusive(100,9999),
        "Posted Camps":  Utility.getRandomIntInclusive(100,9999),
        "Accepted Teachers":  Utility.getRandomIntInclusive(100,9999),
        "Rejected Teachers":  Utility.getRandomIntInclusive(100,9999),
        "Website Visistors Number":  Utility.getRandomIntInclusive(100,9999),
        "Session Duration":  Utility.getRandomIntInclusive(100,9999),
        "Total Number Of Views":  Utility.getRandomIntInclusive(100,9999),
        "Old Visistors":  Utility.getRandomIntInclusive(100,9999),
        "New Visistors":  Utility.getRandomIntInclusive(100,9999),
        "New Facebook Users":  Utility.getRandomIntInclusive(100,9999),
        "New Youtube Users":  Utility.getRandomIntInclusive(100,9999),
        "New Twitter Users":  Utility.getRandomIntInclusive(100,9999),
        "New Instagram Users":  Utility.getRandomIntInclusive(100,9999),
        "New Refereable Users":  Utility.getRandomIntInclusive(100,9999),
        "New Live Users":  Utility.getRandomIntInclusive(100,9999),
        "New Natural Users":  Utility.getRandomIntInclusive(100,9999),
        "New Others Users":  Utility.getRandomIntInclusive(100,9999),
      }
    ],
  }
);
