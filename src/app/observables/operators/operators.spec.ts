import { marbles } from 'rxjs-marbles/jest';
import {
  combineLatest,
  concatMap,
  exhaustMap,
  mergeMap,
  switchMap,
} from 'rxjs';
import { TestObservableLike } from 'rxjs-marbles/types';

describe('RxJs Operators', () => {
  it(
    'should test switchMap',
    marbles((m) => {
      const source = m.cold('  -a-b---c|');
      const dest = m.cold('     -1-2-3|');
      const expected = m.cold('--1-1-2-1-2-3|');

      m.expect(source.pipe(switchMap(() => dest))).toBeObservable(expected);
    })
  );

  it(
    'should test exhaustMap',
    marbles((m) => {
      const source = m.cold('  -a-b----c|');
      const dest = m.cold('     -1-2-3|');
      const expected = m.cold('--1-2-3--1-2-3|');

      m.expect(source.pipe(exhaustMap(() => dest))).toBeObservable(expected);
    })
  );

  it(
    'should test concatMap',
    marbles((m) => {
      const source = m.cold('  -a--b------c|');
      const dest = m.cold('     1-2-3|');
      const expected = m.cold('-1-2-31-2-31-2-3|');

      m.expect(source.pipe(concatMap(() => dest))).toBeObservable(expected);
    })
  );

  it(
    'should test mergeMap',
    marbles((m) => {
      const source = m.cold('  -a----b--c|');
      const dest = m.cold('     1-2-3|');
      const expected = m.cold('-1-2-31-2132-3|');

      m.expect(source.pipe(mergeMap(() => dest))).toBeObservable(expected);
    })
  );

  it(
    'should test combineLatest',
    marbles((m) => {
      const source = m.cold('  ---a-b-c|');
      const dest = m.cold('    1-2-3|');
      const expected = m.cold('---wxy-z|', {
        w: ['a', '2'],
        x: ['a', '3'],
        y: ['b', '3'],
        z: ['c', '3'],
      }) as TestObservableLike<[any, any]>;

      m.expect(combineLatest([source, dest])).toBeObservable(expected);
    })
  );
});
