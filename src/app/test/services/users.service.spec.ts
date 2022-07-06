import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { UsersService } from './users.service';

class MockUsersService {
  public getUsers(): Observable<any> {
    return of('foo');
  }
}

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: UsersService,
          useClass: MockUsersService,
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
