import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from './directives/swiper.directive';
import {
  SlideDirective,
  SwiperComponent,
} from './components/swiper/swiper.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

register();
@NgModule({
  declarations: [SwiperDirective, SwiperComponent, SlideDirective],
  imports: [CommonModule],
  exports: [SwiperDirective, SwiperComponent, SlideDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgxSwiperjsModule {}
