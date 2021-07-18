import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  eventCliked=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickSportFooter(){
    this.eventCliked = true;
    this.router.navigate(['/login']);
  }
}
