import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { ReadMoreModule } from 'ng-readmore';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './shared/signup/signup.component';
import { ListofsportsComponent } from './sports/listofsports/listofsports.component';
import { UpcomingMatchesComponent } from './sports/upcoming-matches/upcoming-matches.component';
import { NewsComponent } from './sports/news/news.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    RouterModule.forRoot ([
        { path: 'login', component: SignupComponent},
        { path: '', component: SignupComponent},
        { path: 'listOfSports', component: ListofsportsComponent},
        { path: 'upcomingMatches', component: UpcomingMatchesComponent},
        { path: 'news', component: NewsComponent}
    ]),
    BrowserModule,
    SharedModule, 
    ReadMoreModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
