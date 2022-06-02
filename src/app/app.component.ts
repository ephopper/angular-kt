import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public date: string = '';
  public text: string = '';

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

  public onNewDate(): void {
    const randNum = Math.floor(Math.random() * 10000000000000);
    this.date = new Date(randNum).toISOString();
  }
}
