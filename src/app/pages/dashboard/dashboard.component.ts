import { Utility } from './../../models/utility';

import { DiskService } from './../../services/disk.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  userRole="";
  stats= statstics;
  fbLikes=0;
  twitterRetweets=0;
  youtubeFollowers=0;
  twitterDifference=0;
  youtubeDifference=0;
  fbDifference=0;
  constructor(
    private disk:DiskService,
    )
  {
    this.userRole = disk.currentUserType.toLocaleLowerCase();
  }
  ngOnInit()
  {
    this.youtubeFollowers = Utility.getTotalOfKey(this.stats,'youtubeFollowers');
    this.twitterRetweets = Utility.getTotalOfKey(this.stats,'twitterRetweets');
    this.fbLikes = Utility.getTotalOfKey(this.stats,'facebookLikes');
    this.twitterDifference = this.getDifferenceFromLastWeek('twitterRetweets');
    this.youtubeDifference = this.getDifferenceFromLastWeek('youtubeFollowers');
    this.fbDifference = this.getDifferenceFromLastWeek('facebookLikes');
  }
  facebokInfo:{name,value,icon}[] =  [
    {
      name:'تفاعل',
      value:Utility.getTotalOfKey(this.stats,'facebookInteractions'),
      icon:"fas fa-users"
    },
    {
      name:'أعجاب',
      value:Utility.getTotalOfKey(this.stats,'facebookLikes'),
      icon:"fas fa-thumbs-up"
    },
    {
      name:'نفوذ',
      value:Utility.getTotalOfKey(this.stats,'facebookInfluences'),
      icon:"fas fa-project-diagram"
    },
    {
      name:'رسالة',
      value:Utility.getTotalOfKey(this.stats,'facebookMessages'),
      icon:"fas fa-comments"
    },
    {
      name:'نقرة',
      value:Utility.getTotalOfKey(this.stats,'facebookClicks'),
      icon:"fas fa-mouse-pointer"
    },
    {
      name:'منشور',
      value:Utility.getTotalOfKey(this.stats,'facebookPosts'),
      icon:"fas fa-pager"
    },

  ];

  twitterInfo:{name,value,icon}[] =  [
    {
      name:'أعادة تغريد',
      value:Utility.getTotalOfKey(this.stats,'twitterRetweets'),
      icon:"fas fa-retweet"
    },
    {
      name:'تفاعل',
      value:Utility.getTotalOfKey(this.stats,'twitterInteractions'),
      icon:"fas fa-users"
    },
    {
      name:'أعجاب',
      value:Utility.getTotalOfKey(this.stats,'twitterLikes'),
      icon:"fas fa-thumbs-up"
    },
    {
      name:'أنطباع',
      value:Utility.getTotalOfKey(this.stats,'twitterImpressions'),
      icon:"fas fa-project-diagram"
    },
    {
      name:'نقرة',
      value:Utility.getTotalOfKey(this.stats,'twitterClicks'),
      icon:"fas fa-mouse-pointer"
    },
    {
      name:'منشور',
      value:Utility.getTotalOfKey(this.stats,'twitterPosts'),
      icon:"fas fa-pager"
    },

  ];

  youtubeInfo:{name,value,icon}[] =  [
    {
      name:'متابع',
      value:Utility.getTotalOfKey(this.stats,'youtubeFollowers'),
      icon:"fas fa-users"
    },
    {
      name:'أعجاب',
      value:Utility.getTotalOfKey(this.stats,'youtubeLikes'),
      icon:"fas fa-thumbs-up"
    },
    {
      name:'مشاهدات',
      value:Utility.getTotalOfKey(this.stats,'youtubeViews'),
      icon:"fas fa-eye"
    },
    {
      name:'مقطع فيديو',
      value:Utility.getTotalOfKey(this.stats,'youtubeVidoesNumber'),
      icon:"fas fa-video"
    },

  ];


  abs(value)
  {
    return Math.abs(value);
  }
  getDifferenceFromLastWeek(keyName)
  {
    if(this.stats.length < 14)
      return 0;
    let end = this.stats.length-1;
    let weeks = [];
    let accumlation = 0;

    for (let i = end; i >= end-7 ; i--)
    {
      const stat = this.stats[i];
      accumlation += Number(stat.statistics[0][keyName]);
    }
    weeks.push(accumlation);
    accumlation = 0;

    end = end-7;
    for (let i = end-7; i >= end-7 ; i--)
    {
      const stat = this.stats[i];
      accumlation += Number(stat.statistics[0][keyName]);
    }
    weeks.push(accumlation);


    let difference = weeks[1] - weeks[0];
    console.log(weeks,difference,(difference*100)/weeks[0]);

    return (difference*100)/weeks[0];
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
            "facebookInteractions": Utility.getRandomIntInclusive(100,9999),
            "facebookLikes": Utility.getRandomIntInclusive(100,9999),
            "facebookInfluences": Utility.getRandomIntInclusive(100,9999),
            "facebookMessages": Utility.getRandomIntInclusive(100,9999),
            "facebookClicks": Utility.getRandomIntInclusive(100,9999),
            "facebookPosts": Utility.getRandomIntInclusive(100,9999),
            "twitterRetweets": Utility.getRandomIntInclusive(100,9999),
            "twitterInteractions": Utility.getRandomIntInclusive(100,9999),
            "twitterLikes": Utility.getRandomIntInclusive(100,9999),
            "twitterImpressions": Utility.getRandomIntInclusive(100,9999),
            "twitterClicks": Utility.getRandomIntInclusive(100,9999),
            "twitterPosts": Utility.getRandomIntInclusive(100,9999),
            "youtubeFollowers": Utility.getRandomIntInclusive(100,9999),
            "youtubeLikes": Utility.getRandomIntInclusive(100,9999),
            "youtubeViews": Utility.getRandomIntInclusive(100,9999),
            "youtubeVidoesNumber": Utility.getRandomIntInclusive(100,9999),
            "registeredStudentsNumber": Utility.getRandomIntInclusive(100,9999),
            "registeredPaidStudentsNumber": Utility.getRandomIntInclusive(100,9999),
            "campsUnderReviewNumber": Utility.getRandomIntInclusive(100,9999),
            "campsPostedNumber": Utility.getRandomIntInclusive(100,9999),
            "acceptedTeachersNumber": Utility.getRandomIntInclusive(100,9999),
            "rejectedTeachersNumber": Utility.getRandomIntInclusive(100,9999),
            "websiteVisitorsNumber": Utility.getRandomIntInclusive(100,9999),
            "sessionDuration": Utility.getRandomIntInclusive(100,9999),
            "totalNumberOfViews": Utility.getRandomIntInclusive(100,9999),
            "oldVisitorsNumber": Utility.getRandomIntInclusive(100,9999),
            "newVisistorsNumber": Utility.getRandomIntInclusive(100,9999),
            "newFacebookUsersNumber": Utility.getRandomIntInclusive(100,9999),
            "newYoutubeUsersNumber": Utility.getRandomIntInclusive(100,9999),
            "newTwitterUsersNumber": Utility.getRandomIntInclusive(100,9999),
            "newInstagramUsersNumber": Utility.getRandomIntInclusive(100,9999),
            "newReferableUserNumber": Utility.getRandomIntInclusive(100,9999),
            "newLiveUsersNumber": Utility.getRandomIntInclusive(100,9999),
            "newNaturalUsersNumber": Utility.getRandomIntInclusive(100,9999),
            "newOthersUsersNumber": Utility.getRandomIntInclusive(100,9999)
        }
    ],
    "date": "Wed Jun 24 2020"
  }
);
