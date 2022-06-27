import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersInterface } from 'src/app/models/users.model';
import { userDelete, userRequest } from './users.actions';
import { selectUsers, selectUsersLoading } from './users.selectors';

@Injectable({
  providedIn: 'root',
})
export class UsersFacade {
  constructor(private store: Store) {}

  public users$: Observable<UsersInterface[]> = this.store.pipe(
    select(selectUsers)
  );
  public isLoading$: Observable<boolean> = this.store.pipe(
    select(selectUsersLoading)
  );

  public getUsers(): void {
    this.store.dispatch(userRequest());
  }
  public deleteUsers(userId: number): void {
    this.store.dispatch(userDelete({ userId }));
  }
}
