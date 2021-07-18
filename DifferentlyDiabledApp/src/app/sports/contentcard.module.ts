import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentcardComponent } from './contentcard/contentcard.component';
import { ListofsportsComponent } from './listofsports/listofsports.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    ContentcardComponent,
    ListofsportsComponent,
    UpcomingMatchesComponent,
    NewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ContentcardComponent,ListofsportsComponent, UpcomingMatchesComponent,NewsComponent]
})
export class ContentcardModule { }
