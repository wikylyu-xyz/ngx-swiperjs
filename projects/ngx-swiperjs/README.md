# NgxSwiperjs

This is a simple Angular wrapper for [swiper](https://swiperjs.com/element).

## Install

```shell
npm i --save @wikylyu/ngx-swiperjs swiper
```

## Usage

Import **NgxSwiperjsModule**

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxSwiperjsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Use **ngx-swiper** and **ngx-swiper-slide**

```html
<ngx-swiper [config]="config" height="600px">
  @for(s of screenshots; track: $index){
  <div *ngx-swiper-slide style="width: 360px; height: 100%">
    <img [src]="s" style="max-width: 100%; max-height: 100%" />
  </div>
  }
</ngx-swiper>
```

**config** is a **SwiperOptions** imported from **swiper/types**

```typescript
import { SwiperOptions } from 'swiper/types';
import { Mousewheel, Navigation, Pagination, A11y } from 'swiper/modules';

...
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
...
```

check **example** for more details.

## Screenshot

![screnshot](https://raw.githubusercontent.com/wikylyu-xyz/ngx-swiperjs/master/screenshot/screenshot1.png)
