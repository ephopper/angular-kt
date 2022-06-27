import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.reducers';

export const getUsersState = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(
  getUsersState,
  (state: UsersState) => state.users
);

export const selectUsersLoading = createSelector(
  getUsersState,
  (state: UsersState) => state.loading
);

export const selectUserError = createSelector(
  getUsersState,
  (state: UsersState) => state.error
);
