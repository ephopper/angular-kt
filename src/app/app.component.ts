import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersInterface } from './models/users.model';
import { userDelete, userRequest } from './state/users/users.actions';
import { selectUsers, selectUsersLoading } from './state/users/users.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public text: string = '';
  public showSubscribeButton = true;

  public users$: Observable<UsersInterface[]> = this.store.pipe(select(selectUsers));
  public isLoading$: Observable<boolean> = this.store.pipe(select(selectUsersLoading));

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(userRequest());
  }

  public toggleSubscribe() {
    this.showSubscribeButton = !this.showSubscribeButton;
  }

  public onDeleteUser(userId: number) {
    this.store.dispatch(userDelete({ userId }));
  }
}
