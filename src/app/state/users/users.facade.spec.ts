import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { marbles } from 'rxjs-marbles/jest';
import * as UserActions from './users.actions';
import { UsersFacade } from './users.facade';
import * as UserSelectors from './users.selectors';

describe('Users Facade', () => {
  let facade: UsersFacade;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersFacade, provideMockStore()],
    });
    facade = TestBed.inject(UsersFacade);
    store = TestBed.inject(MockStore);
  });

  it(
    'should select users',
    marbles((m) => {
      const users = m.cold('a', { a: [] });
      store.overrideSelector(UserSelectors.selectUsers, [] )
      m.expect(facade.users$).toBeObservable(users);
    })
  );

  it(
    'should select loading',
    marbles((m) => {
      const loading = m.cold('a', { a: true });
      store.overrideSelector(UserSelectors.selectUsersLoading, true);
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
