import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public winCashAndPrizes: boolean = false;
  public cashAndPrizes: string = 'BIG MONEY!!!!!';

  public onGreaterThan3($event: any): void {
    this.winCashAndPrizes = $event;
  }
}
