import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentcardComponent } from '../sports/contentcard/contentcard.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { SignupComponent } from './signup/signup.component';
import { ListofsportsComponent } from '../sports/listofsports/listofsports.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentcardComponent,
    ReadmoreComponent,
    SignupComponent,
    ListofsportsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, ContentcardComponent, ReadmoreComponent, SignupComponent, ListofsportsComponent]
})

export class SharedModule { }