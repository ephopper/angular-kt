import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public count: number = 0;

  constructor() { }

  public getCount(): number {
    return this.count;
  }

  public incCount(): void {
    this.count++;
  }

  public decCount(): void {
    this.count--;
  }
}
