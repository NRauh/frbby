import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SwiperComponent } from './swiper/swiper.component';
import { CardComponent } from './swiper/card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessagesComponent } from './messages/messages.component';

let appRoutes: Routes = [
  { path: '', component: SwiperComponent },
  { path: 'messages', component: MessagesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SwiperComponent,
    CardComponent,
    NavbarComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
