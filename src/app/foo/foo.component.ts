import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  public getCount(): number {
    return this.counterService.getCount();
  }

  public incCount(): void {
    this.counterService.incCount();
  }

  public decCount(): void {
    this.counterService.decCount();
  }
}
