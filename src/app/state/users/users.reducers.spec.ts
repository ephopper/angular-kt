import { initialUsersState, usersReducer, UsersState } from './users.reducers';
import * as UsersActions from './users.actions';

describe('Users Reducer', () => {
  it('should return the initial state for invalid action type', () => {
    expect(usersReducer(initialUsersState, { type: 'foo' })).toBe(
      initialUsersState
    );
  });

  it('should update the state for a users request action', () => {
    const newState: UsersState = {
      ...initialUsersState,
      loading: true,
    };
    expect(usersReducer(initialUsersState, UsersActions.userRequest)).toEqual(
      newState
    );
  });

  it('should update the state for a users request success action', () => {
    const newState: UsersState = {
      ...initialUsersState,
      users: [{ id: 1 }],
    };
    expect(
      usersReducer(
        initialUsersState,
        UsersActions.userRequestSuccess({ users: [{ id: 1 }] })
      )
    ).toEqual(newState);
  });

  it('should update the state for a users request failure action', () => {
    const newState: UsersState = {
      ...initialUsersState,
      error: 'error',
    };
    expect(
      usersReducer(
        initialUsersState,
        UsersActions.userRequestFailure({ error: 'error' })
      )
    ).toEqual(newState);
  });

  it('should update the state for a user delete action', () => {
    const newState: UsersState = {
      ...initialUsersState,
      users: [{ id: 1 }],
    };
    expect(
      usersReducer(newState, UsersActions.userDelete({ userId: 1 }))
    ).toEqual(initialUsersState);
  });
});
