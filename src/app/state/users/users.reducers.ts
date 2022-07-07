import { createReducer, on } from '@ngrx/store';
import { UsersInterface } from 'src/app/models/users.model';
import {
  userDelete,
  userRequest,
  userRequestFailure,
  userRequestSuccess,
} from './users.actions';

export interface UsersState {
  users: UsersInterface[];
  error: any;
  loading: boolean;
}

export const initialUsersState: UsersState = {
  users: [],
  error: null,
  loading: false,
};

export const usersReducer = createReducer(
  initialUsersState,
  on(userRequest, (state: UsersState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(userRequestSuccess, (state: UsersState, props) => {
    return {
      ...state,
      users: props.users,
      loading: false,
    };
  }),
  on(userRequestFailure, (state: UsersState, props) => {
    return {
      ...state,
      users: [],
      loading: false,
      error: props.error,
    };
  }),
  on(userDelete, (state: UsersState, props) => {
    return {
      ...state,
      users: state.users.filter(
        (user: UsersInterface) => user.id !== props.userId
      ),
    };
  })
);
