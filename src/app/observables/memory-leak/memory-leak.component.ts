import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-memory-leak',
  templateUrl: './memory-leak.component.html',
  styleUrls: ['./memory-leak.component.scss']
})
export class MemoryLeakComponent implements OnInit, OnDestroy {

  public interval$: Observable<number> = interval(1000);

  constructor() { }

  ngOnInit(): void { }

  public onSubscribe() {
    console.log('subscription added');
    this.interval$.subscribe((val: number) => console.log('val:', val));
  }

  public ngOnDestroy(): void {
      console.log('in ngOnDestroy');
  }

}
