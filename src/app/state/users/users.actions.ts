import { createAction, props } from '@ngrx/store';
import { UsersInterface } from 'src/app/models/users.model';

export const userRequest = createAction('[Users List] Users List Request');
export const userRequestSuccess = createAction('[Users List] Users List Request Success', props<{ users: UsersInterface[] }>());
export const userRequestFailure = createAction('[Users List] Users List Request Failure', props<{ error: any }>());

export const userDelete = createAction('[Users List] User Delete', props<{ userId: number }>())