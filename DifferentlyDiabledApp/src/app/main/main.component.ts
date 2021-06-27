import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title: string = '';
  description: string = '';
  buttonState: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Cricket'
    this.description  = 'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. ... When ten batters have been dismissed,'
    +'the innings ends and the teams swap roles.';
    this.buttonState = true;
  }

}
