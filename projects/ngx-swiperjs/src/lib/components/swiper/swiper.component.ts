import {
  Component,
  ContentChildren,
  Directive,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { SwiperOptions } from 'swiper/types';

import { register } from 'swiper/element/bundle';

@Directive({ selector: '[ngx-swiper-slide]' })
export class SlideDirective {
  constructor(public template: TemplateRef<any>) {}
}

@Component({
  selector: 'ngx-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent {
  @ContentChildren(SlideDirective) slides!: QueryList<SlideDirective>;
  @Input() config: SwiperOptions = {};

  @Input() height: string = '600px';

  constructor() {
    register();
  }
}
