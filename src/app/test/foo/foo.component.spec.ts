import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorTextDirective } from '../directives/color-text.directive';

import { FooComponent } from './foo.component';

describe('FooComponent', () => {
  let component: FooComponent;
  let fixture: ComponentFixture<FooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooComponent, ColorTextDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
