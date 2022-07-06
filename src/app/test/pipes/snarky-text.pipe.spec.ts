import { TestBed } from '@angular/core/testing';
import { SnarkyTextPipe } from './snarky-text.pipe';

describe('SnarkyTextPipe', () => {
  let pipe: SnarkyTextPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnarkyTextPipe]
    });
    pipe = TestBed.inject(SnarkyTextPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should snarkify the input text', () => {
    const str = 'spongebob has a serious attitude problem';
    const snarkifiedStr = pipe.transform(str);

    expect(snarkifiedStr).not.toBe(str);
    expect(snarkifiedStr.toLowerCase()).toBe(str.toLowerCase());
  });
});
