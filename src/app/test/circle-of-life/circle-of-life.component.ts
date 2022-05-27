import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-circle-of-life',
  templateUrl: './circle-of-life.component.html',
  styleUrls: ['./circle-of-life.component.scss']
})
export class CircleOfLifeComponent implements OnInit, OnChanges, OnDestroy {

  @Input() someVal!: number;

  constructor() {
    console.log('in the constructor');
  }

  public ngOnInit(): void {
    console.log('in onInit');
  }
  public ngOnChanges(changes: SimpleChanges): void {
      console.log('in onChanges:', changes);
  }

  public ngOnDestroy(): void {
      console.log('in onDestroy');
  }

}
