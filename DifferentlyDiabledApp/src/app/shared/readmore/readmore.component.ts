import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {

  @Input()
  sport: any;

  @Output()
  emitData = new EventEmitter();

  eventCliked = false;

  readMore = false;

  constructor() { }

  ngOnInit(): void {

  }

  clickSport(event: any) {
    // before emit change should be done here
    event.title = "Amritha";
    this.emitData.emit(event);
    this.eventCliked = true;
  }
}
