import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { marbles } from 'rxjs-marbles/jest';
import * as UserActions from './users.actions';
import { UsersFacade } from './users.facade';
import * as FromUsers from './users.reducers';

describe('Users Facade', () => {
  let facade: UsersFacade;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('users', FromUsers.usersReducer),
      ],
      providers: [UsersFacade],
    });
    facade = TestBed.inject(UsersFacade);
    store = TestBed.inject(Store);
  });

  it(
    'should select users',
    marbles((m) => {
      const users = m.cold('a', { a: [] });
      store.dispatch(UserActions.userRequestSuccess({ users: [] }));
      m.expect(facade.users$).toBeObservable(users);
    })
  );

  it(
    'should select loading',
    marbles((m) => {
      const loading = m.cold('a', { a: true });
      store.dispatch(UserActions.userRequest());
      m.expect(facade.isLoading$).toBeObservable(loading);
    })
  );

  it('should dispatch a userRequest action', () => {
    const spy = jest.spyOn(store, 'dispatch');
    facade.getUsers();
    expect(spy).toHaveBeenCalledWith(UserActions.userRequest());
  });

  it('should dispatch a userDelete action', () => {
    const spy = jest.spyOn(store, 'dispatch');
    facade.deleteUsers(1);
    expect(spy).toHaveBeenCalledWith(UserActions.userDelete({ userId: 1 }));
  });
});
