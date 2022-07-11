import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { UsersService } from './users.service';

class MockHttpClient {
  public get(): Observable<any> {
    return of('foo');
  }
}

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useClass: MockHttpClient,
        },
      ],
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getUsers response', (done) => {
    service.getUsers().subscribe((res: any) => {
      expect(res).toBe('foo');
      done();
    });
  });
});
