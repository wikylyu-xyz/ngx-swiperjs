import { TestBed } from '@angular/core/testing';

import { NgxSwiperjsService } from './ngx-swiperjs.service';

describe('NgxSwiperjsService', () => {
  let service: NgxSwiperjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSwiperjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
