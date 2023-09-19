import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';

@Directive({
  selector: '[ngxSwiper]',
})
export class SwiperDirective {
  private readonly swiperElement: HTMLElement;

  @Input('config')
  config?: SwiperOptions;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit() {
    Object.assign(this.el.nativeElement, this.config);

    // @ts-ignore
    this.el.nativeElement.initialize();
    // @ts-ignore
    if (this.el.nativeElement.swiper.autoplay) {
      // @ts-ignore
      this.el.nativeElement.swiper.autoplay.start();
    }
  }
}
