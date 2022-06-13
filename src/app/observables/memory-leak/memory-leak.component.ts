import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-memory-leak',
  templateUrl: './memory-leak.component.html',
  styleUrls: ['./memory-leak.component.scss'],
})
export class MemoryLeakComponent implements OnInit, OnDestroy {
  public interval$: Observable<number> = interval(1000);
  private subscriptionDestroyer$: Subject<void> = new Subject();

  // option 2:
  // private subscriptions: Subscription[] = [];

  constructor() {}

  ngOnInit(): void {}

  public onSubscribe() {
    console.log('subscription added');
    this.interval$
      .pipe(takeUntil(this.subscriptionDestroyer$))
      .subscribe((val: number) => console.log('val:', val));

    // option 2:
    // this.subscriptions.push(this.interval$.subscribe((val: number) => console.log('val:', val)));
  }

  public ngOnDestroy(): void {
    console.log('in ngOnDestroy');
    this.subscriptionDestroyer$.next();
    this.subscriptionDestroyer$.complete();

    // option 2:
    // this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}
