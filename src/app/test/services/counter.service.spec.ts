import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the count', () => {
    expect(service.getCount()).toBe(0);
  });

  it('should increment the count', () => {
    service.incCount();
    expect(service.getCount()).toBe(1);
  });

  it('should decrement the count', () => {
    service.decCount();
    expect(service.getCount()).toBe(-1);
  });
});
