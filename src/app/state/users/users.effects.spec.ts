import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';

// tried to use jest-marbles but...
// jest-marbles is currently broken:
// https://github.com/just-jeb/jest-marbles/issues/401
import { marbles } from 'rxjs-marbles/jest';
import { UsersService } from 'src/app/test/services/users.service';
import { UsersEffects } from './users.effects';

import * as UserActions from './users.actions';

describe('Users Effects', () => {
  let actions$: Observable<any>;
  let effects: UsersEffects;
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersEffects,
        provideMockActions(() => actions$),
        {
          provide: UsersService,
          useValue: {
            getUsers: jest.fn(),
          },
        },
      ],
    });
    effects = TestBed.inject(UsersEffects);
    usersService = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should dispatch a userRequestSuccess action on successful call to getUsers', marbles(m => {
    actions$ = m.cold('-a', { a: UserActions.userRequest() });
    const response = m.cold('-a|', { a: [] });
    const expected = m.cold('--b', { b: UserActions.userRequestSuccess({ users: [] }) })
    usersService.getUsers = jest.fn(() => response);
    m.expect(effects.loadUsers).toBeObservable(expected)
  }));

  it('should dispatch a userRequestFailure action on an error', marbles(m => {
    actions$ = m.cold('-a', { a: UserActions.userRequest() });
    const response = m.cold('-#|', {}, { error: 'error' });
    const expected = m.cold('--b', { b: UserActions.userRequestFailure({ error: 'error' }) })
    usersService.getUsers = jest.fn(() => response);
    m.expect(effects.loadUsers).toBeObservable(expected)
  }));
});
