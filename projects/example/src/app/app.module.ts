import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSwiperjsModule } from 'ngx-swiperjs';
// import { NgxSwiperjsModule } from 'projects/ngx-swiperjs/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxSwiperjsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
