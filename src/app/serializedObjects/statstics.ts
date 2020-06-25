
export interface Statistic {
  facebookInteractions: number;
  facebookLikes: number;
  facebookInfluences: number;
  facebookMessages: number;
  facebookClicks: number;
  facebookPosts: number;
  twitterRetweets: number;
  twitterInteractions: number;
  twitterLikes: number;
  twitterImpressions: number;
  twitterClicks: number;
  twitterPosts: number;
  youtubeFollowers: number;
  youtubeLikes: number;
  youtubeViews: number;
  youtubeVidoesNumber: number;
  registeredStudentsNumber: number;
  registeredPaidStudentsNumber: number;
  campsUnderReviewNumber: number;
  campsPostedNumber: number;
  acceptedTeachersNumber: number;
  rejectedTeachersNumber: number;
  websiteVisitorsNumber: number;
  sessionDuration: number;
  totalNumberOfViews: number;
  oldVisitorsNumber: number;
  newVisistorsNumber: number;
  newFacebookUsersNumber: number;
  newYoutubeUsersNumber: number;
  newTwitterUsersNumber: number;
  newInstagramUsersNumber: number;
  newReferableUserNumber: number;
  newLiveUsersNumber: number;
  newNaturalUsersNumber: number;
  newOthersUsersNumber: number;
}

export interface RootObject {
  statistics: Statistic[];
  date: string;
}
