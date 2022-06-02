import { Component } from '@angular/core';
import { users } from '../assets/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public date: string = '';
  public text: string = '';
  public users: any = users;

  public winCashAndPrizes: boolean = false;
  public cashAndPrizes: string = 'BIG MONEY!!!!!';

  public onGreaterThan3($event: boolean): void {
    this.winCashAndPrizes = $event;
  }

  public onNewDate(): void {
    const randNum = Math.floor(Math.random() * 10000000000000);
    this.date = new Date(randNum).toISOString();
  }
}
