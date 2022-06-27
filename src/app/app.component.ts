import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersInterface } from './models/users.model';
import { UsersFacade } from './state/users/users.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public text: string = '';
  public showSubscribeButton = true;

  public users$: Observable<UsersInterface[]> = this.usersFacade.users$;
  public isLoading$: Observable<boolean> = this.usersFacade.isLoading$;

  constructor(private usersFacade: UsersFacade) {}

  public ngOnInit(): void {
    this.usersFacade.getUsers();
  }

  public toggleSubscribe() {
    this.showSubscribeButton = !this.showSubscribeButton;
  }

  public onDeleteUser(userId: number) {
    this.usersFacade.deleteUsers(userId);
  }
}
