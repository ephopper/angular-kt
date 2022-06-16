import { Component, OnInit } from '@angular/core';
import { filter, from, interval, map, Observable, Observer, reduce, take } from 'rxjs';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.scss']
})
export class ObservablesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log('before obs');

    // const obs: Observable<number> = new Observable((observer: Observer<number>) => {
    //   // observer.next(0);
    //   // observer.next(1);
    //   // observer.next(2);
    //   // observer.next(3);
    //   // observer.next(4);

    //   // for (let i = 0; i < 5; i++) {
    //   //   observer.next(i);
    //   // }
    //   // observer.complete();

    //   let count: number = 0;
    //   setInterval(() => observer.next(count++), 1000);
    //   setTimeout(() => observer.complete(), 5000);
    // });

    // obs.subscribe({
    //   next: (val: number) => console.log('next:', val),
    //   error: (err: any) => console.error('ERROR:::', err),
    //   complete: () => console.log('*** completed ***')
    // });

    // interval(1000)
    //   .pipe(
    //     take(5)
    //   )
    //   .subscribe({
    //     next: (val: number) => console.log('next:', val),
    //     error: (err: any) => console.error('ERROR:::', err),
    //     complete: () => console.log('*** completed ***')
    //   })

    // console.log('after subscription');

    const arr: number[] = [1,2,3,4,5,6,7];
    const processedArr: number = arr
      .filter(i => i % 2 === 0)
      .map(i => i ** 2)
      .reduce((acc: number, cur: number) => acc * cur);

    console.log('processedArr:', processedArr);

    from([1,2,3,4,5,6,7])
      .pipe(
        filter(i => i % 2 === 0),
        map(i => i ** 2),
        reduce((acc: number, cur: number) => acc * cur)
      )
      .subscribe((val: number) => console.log('next:', val));
  }

}
