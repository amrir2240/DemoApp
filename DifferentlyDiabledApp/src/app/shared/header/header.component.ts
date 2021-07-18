import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
   data: any;

  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToListOfSports()
  {
    this.router.navigate(['/listOfSports']);
  }
  navigateToupcomingMatches()
  {
    this.router.navigate(['/upcomingMatches']);
  }
  navigateToNews()
  {
    this.router.navigate(['/news']);
  }
}
