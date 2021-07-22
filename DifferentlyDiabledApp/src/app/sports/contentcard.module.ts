import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentcardComponent } from './contentcard/contentcard.component';
import { ListofsportsComponent } from './listofsports/listofsports.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { NewsComponent } from './news/news.component';
import { WatchComponent } from './watch/watch.component';
import { MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle } from '@angular/material/expansion';

@NgModule({
  declarations: [
    ContentcardComponent,
    ListofsportsComponent,
    UpcomingMatchesComponent,
    NewsComponent,
    WatchComponent
    ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatExpansionPanel,
    MatAccordion,
    MatExpansionPanelTitle
    
  ],
  exports: [MatExpansionModule,ContentcardComponent,ListofsportsComponent, UpcomingMatchesComponent,NewsComponent, WatchComponent  ]
})
export class ContentcardModule { }
