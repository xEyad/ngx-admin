import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {

  flipped: boolean = false;
  selectedDuration: string = 'Daily';
  constructor() { }

  ngOnInit(): void {
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
      return 'يومي'
      case 'monthly':
        return 'شهري'
      case 'weekly':
        return 'أسبوعي'
      default:
        break;
    }
  }

}
