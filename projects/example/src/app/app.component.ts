import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { Mousewheel, Navigation, Pagination, A11y } from 'swiper/modules';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    autoHeight: true,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: true },
    slidesPerView: 'auto',
    centeredSlides: true,
    breakpoints: {
      400: {
        slidesPerView: 'auto',
        centeredSlides: false,
      },
    },
  };
  screenshots = [
    '../assets/screenshot1.webp',
    '../assets/screenshot2.webp',
    '../assets/screenshot3.webp',
    '../assets/screenshot4.webp',
    '../assets/screenshot5.webp',
  ];
}
