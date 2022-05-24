import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public winCashAndPrizes: boolean = false;
  public cashAndPrizes: string = 'BIG MONEY!!!!!';

  public value: number = 99;
  public showCOL: boolean = false;

  public onGreaterThan3($event: boolean): void {
    this.winCashAndPrizes = $event;
  }

  public onUpdateVal(): void {
    this.value++;
  }

  public onToggleCOL(): void {
    this.showCOL = !this.showCOL;
  }
}
