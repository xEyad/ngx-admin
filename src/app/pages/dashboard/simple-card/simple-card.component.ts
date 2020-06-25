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
    this.registeredStudentsNumber = Utility.getTotalOfKey(this.data,'registeredStudentsNumber');
    this.registeredPaidStudentsNumber = Utility.getTotalOfKey(this.data,'registeredPaidStudentsNumber');
    this.campsUnderReviewNumber = Utility.getTotalOfKey(this.data,'campsUnderReviewNumber');
    this.campsPostedNumber = Utility.getTotalOfKey(this.data,'campsPostedNumber');
    this.acceptedTeachersNumber = Utility.getTotalOfKey(this.data,'acceptedTeachersNumber');
    this.rejectedTeachersNumber = Utility.getTotalOfKey(this.data,'rejectedTeachersNumber');

    this.websiteVisitorsNumber = Utility.getTotalOfKey(this.data,'websiteVisitorsNumber');
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
    this.dailyRegisteredStudentsNumber = Utility.calculateDailyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.dailyRegisteredPaidStudentsNumber = Utility.calculateDailyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.dailyCampsUnderReviewNumber = Utility.calculateDailyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.dailyCampsPostedNumber = Utility.calculateDailyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.dailyAcceptedTeachersNumber = Utility.calculateDailyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.dailyRejectedTeachersNumber = Utility.calculateDailyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));

    this.weeklyRegisteredStudentsNumber = Utility.calculateWeeklyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.weeklyRegisteredPaidStudentsNumber = Utility.calculateWeeklyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.weeklyCampsUnderReviewNumber = Utility.calculateWeeklyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.weeklyCampsPostedNumber = Utility.calculateWeeklyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.weeklyAcceptedTeachersNumber = Utility.calculateWeeklyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.weeklyRejectedTeachersNumber = Utility.calculateWeeklyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));

    this.monthlyRegisteredStudentsNumber = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.monthlyRegisteredPaidStudentsNumber = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.monthlyCampsUnderReviewNumber = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.monthlyCampsPostedNumber = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.monthlyAcceptedTeachersNumber = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
    this.monthlyRejectedTeachersNumber = Utility.calculateMonthlyRate(Utility.getAllOfKey(this.data,'registeredStudentsNumber'));
  }

}
