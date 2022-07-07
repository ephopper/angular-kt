import { initialUsersState } from './users.reducers';
import { getUsersState, selectUserError, selectUsers, selectUsersLoading } from './users.selectors';

describe('Users Selectors', () => {
  it('should select the feature state', () => {
    expect(getUsersState({ users: initialUsersState })).toBe(initialUsersState);
  });

  it('should select the users from state', () => {
    expect(selectUsers.projector(initialUsersState)).toBe(initialUsersState.users);
  });

  it('should select the users loading state from state', () => {
    expect(selectUsersLoading.projector(initialUsersState)).toBe(initialUsersState.loading);
  });

  it('should select the users error state from state', () => {
    expect(selectUserError.projector(initialUsersState)).toBe(initialUsersState.error);
  });
});