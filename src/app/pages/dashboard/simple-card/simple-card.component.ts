import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss']
})
export class SimpleCardComponent implements OnInit {

  flipped:boolean = false;
  selectedDuration:string = 'Daily';
  constructor() { }

  ngOnInit(): void {
  }
  flipCard(): void
  {
    this.flipped = !this.flipped;
  }
  changeDuration(selection:string)
  {
    this.selectedDuration = selection;
  }
}
