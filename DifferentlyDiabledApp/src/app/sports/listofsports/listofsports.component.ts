import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofsports',
  templateUrl: './listofsports.component.html',
  styleUrls: ['./listofsports.component.css']
})
export class ListofsportsComponent implements OnInit {
  listOfSports = [{}];
  sportData: any = [];
  sport: any;

  constructor() { }

  ngOnInit(): void {
    this.listOfSports = [{
      imgUrl : './../../../assets/image/cricket.jpg',
      title: 'Cricket',
      description: 'Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. ... When ten batters have been dismissed,'
        + 'the innings ends and the teams swap roles.',
      buttonState: false,
      url: 'https://en.wikipedia.org/wiki/Cricket'
    },
    {
      imgUrl : './../../../assets/image/badminton.jpg',
      title: 'Badminton',
      description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net,'
        + 'Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side).',
      buttonState: true,
      url: 'https://en.wikipedia.org/wiki/Badminton'
    },
    {
      imgUrl : './../../../assets/image/basketball.jpg',
      title: 'Basketball',
      description: 'Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court,'
        + 'compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court) while preventing the opposing team from shooting through their own hoop. ',
      buttonState: true,
      url: 'https://en.wikipedia.org/wiki/Basketball'
    },
    {
      imgUrl : './../../../assets/image/swimming.jpg',
      title: 'Swimming',
      description: 'Swimming is an individual or team racing sport that requires the use of ones entire body to move through water.,'
        + 'The sport takes place in pools or open water (e.g., in a sea or lake)',
      buttonState: true,
      url: 'https://en.wikipedia.org/wiki/Swimming_(sport)'
    },
    {
      imgUrl : './../../../assets/image/football.png',
      title: 'Football',
      description: 'Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal,'
        + 'Unqualified, the word football normally means the form of football that is the most popular where the word is used. .',
      buttonState: true,
      url: 'https://en.wikipedia.org/wiki/Football'
    }
    ]
  }

  eventClicked(event: any) {
    this.sport = event;
  }

}
