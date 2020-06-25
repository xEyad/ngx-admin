import { Utility } from './../../../models/utility';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {

  flipped: boolean = false;
  selectedDuration: string = 'Daily';
  registeredStudentsNumber;
  registeredPaidStudentsNumber;
  campsUnderReviewNumber;
  campsPostedNumber;
  acceptedTeachersNumber;
  rejectedTeachersNumber;
  websiteVisitorsNumber;

  dailyRegisteredStudentsNumber;
  dailyRegisteredPaidStudentsNumber;
  dailyCampsUnderReviewNumber;
  dailyCampsPostedNumber;
  dailyAcceptedTeachersNumber;
  dailyRejectedTeachersNumber;
  dailyWebsiteVisitorsNumber;

  weeklyRegisteredStudentsNumber;
  weeklyRegisteredPaidStudentsNumber;
  weeklyCampsUnderReviewNumber;
  weeklyCampsPostedNumber;
  weeklyAcceptedTeachersNumber;
  weeklyRejectedTeachersNumber;
  weeklyWebsiteVisitorsNumber;

  monthlyRegisteredStudentsNumber;
  monthlyRegisteredPaidStudentsNumber;
  monthlyCampsUnderReviewNumber;
  monthlyCampsPostedNumber;
  monthlyAcceptedTeachersNumber;
  monthlyRejectedTeachersNumber;
  monthlyWebsiteVisitorsNumber;

  viewedRegisteredStudentsNumber;
  viewedRegisteredPaidStudentsNumber;
  viewedCampsUnderReviewNumber;
  viewedCampsPostedNumber;
  viewedAcceptedTeachersNumber;
  viewedRejectedTeachersNumber;
  viewedWebsiteVisitorsNumber;
  @Input() data;
  constructor() { }

  ngOnInit(): void {
    this.registeredStudentsNumber = Utility.getAllOfKey(this.data,'Registered Students')[Utility.getAllOfKey(this.data,'Registered Students').length-1];
    this.registeredPaidStudentsNumber = Utility.getAllOfKey(this.data,'Premium Registered Students')[Utility.getAllOfKey(this.data,'Premium Registered Students').length-1];
    this.campsUnderReviewNumber = Utility.getAllOfKey(this.data,'Camps Under Review')[Utility.getAllOfKey(this.data,'Camps Under Review').length-1];
    this.campsPostedNumber = Utility.getAllOfKey(this.data,'Posted Camps')[Utility.getAllOfKey(this.data,'Posted Camps').length-1];
    this.acceptedTeachersNumber = Utility.getAllOfKey(this.data,'Accepted Teachers')[Utility.getAllOfKey(this.data,'Accepted Teachers').length-1];
    this.rejectedTeachersNumber = Utility.getAllOfKey(this.data,'Rejected Teachers')[Utility.getAllOfKey(this.data,'Rejected Teachers').length-1];

    this.websiteVisitorsNumber = Utility.getAllOfKey(this.data,'Total Number Of Views')[Utility.getAllOfKey(this.data,'Total Number Of Views').length-1];
    this.calculateRates();
  }
  flipCard(): void {
    this.flipped = !this.flipped;
  }
  changeDuration(selection: string) {
    this.selectedDuration = selection;
  }
  viewedDuration(): string {
    switch (this.selectedDuration.toLowerCase()) {
      case 'daily':
        this.viewedRegisteredStudentsNumber = this.dailyRegisteredStudentsNumber;
        this.viewedRegisteredPaidStudentsNumber = this.dailyRegisteredPaidStudentsNumber;
        this.viewedCampsUnderReviewNumber = this.dailyCampsUnderReviewNumber;
        this.viewedCampsPostedNumber = this.dailyCampsPostedNumber;
        this.viewedAcceptedTeachersNumber = this.dailyAcceptedTeachersNumber;
        this.viewedRejectedTeachersNumber = this.dailyRejectedTeachersNumber;
        this.viewedWebsiteVisitorsNumber = this.dailyWebsiteVisitorsNumber;
        return 'يومي'
      case 'monthly':
        this.viewedRegisteredStudentsNumber = this.monthlyRegisteredStudentsNumber;
        this.viewedRegisteredPaidStudentsNumber = this.monthlyRegisteredPaidStudentsNumber;
        this.viewedCampsUnderReviewNumber = this.monthlyCampsUnderReviewNumber;
        this.viewedCampsPostedNumber = this.monthlyCampsPostedNumber;
        this.viewedAcceptedTeachersNumber = this.monthlyAcceptedTeachersNumber;
        this.viewedRejectedTeachersNumber = this.monthlyRejectedTeachersNumber;
        this.viewedWebsiteVisitorsNumber = this.monthlyWebsiteVisitorsNumber;
        return 'شهري'
      case 'weekly':
        this.viewedRegisteredStudentsNumber = this.weeklyRegisteredStudentsNumber;
        this.viewedRegisteredPaidStudentsNumber = this.weeklyRegisteredPaidStudentsNumber;
        this.viewedCampsUnderReviewNumber = this.weeklyCampsUnderReviewNumber;
        this.viewedCampsPostedNumber = this.weeklyCampsPostedNumber;
        this.viewedAcceptedTeachersNumber = this.weeklyAcceptedTeachersNumber;
        this.viewedRejectedTeachersNumber = this.weeklyRejectedTeachersNumber;
        this.viewedWebsiteVisitorsNumber = this.weeklyWebsiteVisitorsNumber;
        return 'أسبوعي'
      default:
        break;
    }
  }

  async calculateRates()
  {
    this.dailyRegisteredStudentsNumber = Utility.calculateDailyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.dailyRegisteredPaidStudentsNumber = Utility.calculateDailyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.dailyCampsUnderReviewNumber = Utility.calculateDailyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.dailyCampsPostedNumber = Utility.calculateDailyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.dailyAcceptedTeachersNumber = Utility.calculateDailyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.dailyRejectedTeachersNumber = Utility.calculateDailyRate(Utility.getAllOfKey(this.data,'Registered Students'));

    this.weeklyRegisteredStudentsNumber = Utility.calculateWeeklyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.weeklyRegisteredPaidStudentsNumber = Utility.calculateWeeklyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.weeklyCampsUnderReviewNumber = Utility.calculateWeeklyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.weeklyCampsPostedNumber = Utility.calculateWeeklyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.weeklyAcceptedTeachersNumber = Utility.calculateWeeklyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.weeklyRejectedTeachersNumber = Utility.calculateWeeklyRate(Utility.getAllOfKey(this.data,'Registered Students'));

    this.monthlyRegisteredStudentsNumber = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.monthlyRegisteredPaidStudentsNumber = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.monthlyCampsUnderReviewNumber = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.monthlyCampsPostedNumber = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.monthlyAcceptedTeachersNumber = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.data,'Registered Students'));
    this.monthlyRejectedTeachersNumber = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.data,'Registered Students'));
  }

}
