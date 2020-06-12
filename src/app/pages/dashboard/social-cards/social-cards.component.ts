import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-social-cards',
  templateUrl: './social-cards.component.html',
  styleUrls: ['./social-cards.component.scss']
})
export class SocialCardsComponent implements OnInit {

  @Input() label:string = "not set";
  @Input() value:string = "not set";
  @Input() evaluation:string = "not set";
  @Input() lastEvaluationDate:string = "not set";
  @Input() isIncreasing:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
