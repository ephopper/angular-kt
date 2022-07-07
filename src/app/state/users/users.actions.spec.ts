import * as UsersActions from './users.actions';

describe('Users actions', () => {
  it('should have a Users List Request action', () => {
    expect(UsersActions.userRequest().type).toBe(
      '[Users List] Users List Request'
    );
  });

  it('should have a Users List Request action', () => {
    expect(UsersActions.userRequestSuccess({ users: [] }).type).toBe(
      '[Users List] Users List Request Success'
    );
  });

  it('should have a Users List Request action', () => {
    expect(UsersActions.userRequestFailure({ error: 'error' }).type).toBe(
      '[Users List] Users List Request Failure'
    );
  });

  it('should have a Users List Request action', () => {
    expect(UsersActions.userDelete({ userId: 1 }).type).toBe(
      '[Users List] User Delete'
    );
  });
});
