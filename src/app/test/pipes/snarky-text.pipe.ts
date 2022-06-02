import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snarkyText'
})
export class SnarkyTextPipe implements PipeTransform {

  transform(value: string): string {
    const snarkifiedValue: string = value.toLowerCase().split('').map((letter: string) => {
      return Math.random() > 0.4 ? letter.toUpperCase() : letter
    }).join('');
    return snarkifiedValue;
  }

}
