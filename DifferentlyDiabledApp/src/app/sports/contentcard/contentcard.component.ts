import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contentcard',
  templateUrl: './contentcard.component.html',
  styleUrls: ['./contentcard.component.css']
})
export class ContentcardComponent implements OnInit {

  @Input()
  sportData: any;

  @Output()
  emitSport = new EventEmitter();

  eventCliked = false;

  readMore = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  clickSport(event: string) {
    this.emitSport.emit(event);
    this.eventCliked = true;
  }

}
