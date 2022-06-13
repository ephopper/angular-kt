import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './test/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public text: string = '';
  public showSubscribeButton = true;
  public users$: Observable<any> = this.usersService.getUsers();

  constructor(private usersService: UsersService) { }

  public toggleSubscribe() {
    this.showSubscribeButton = !this.showSubscribeButton;
  }

}
