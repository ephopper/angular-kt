import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  providers: [CounterService]
})
export class FooComponent implements OnInit {

  @Output() public isGreaterThan3: EventEmitter<boolean> = new EventEmitter();

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  public getCount(): number {
    return this.counterService.getCount();
  }

  public incCount(): void {
    this.counterService.incCount();
    this.isGreaterThan3.emit(this.checkCount());
  }

  public decCount(): void {
    this.counterService.decCount();
    this.isGreaterThan3.emit(this.checkCount());
  }

  public checkCount(): boolean {
    return this.counterService.getCount() > 3;
  }
}
