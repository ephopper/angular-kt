import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UsersInterface } from 'src/app/models/users.model';
import { UsersService } from 'src/app/test/services/users.service';
import * as userActions from './users.actions';

@Injectable()
export class UsersEffects {
  constructor(private action$: Actions, private usersService: UsersService) {}

  loadUsers = createEffect(() =>
    this.action$.pipe(
      ofType(userActions.userRequest),
      switchMap(() =>
        this.usersService.getUsers().pipe(
          map((users: UsersInterface[]) =>
            userActions.userRequestSuccess({ users })
          ),
          catchError((error: any) => of(userActions.userRequestFailure(error)))
        )
      )
    )
  );
}
