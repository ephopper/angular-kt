import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleOfLifeComponent } from './circle-of-life.component';

describe('CircleOfLifeComponent', () => {
  let component: CircleOfLifeComponent;
  let fixture: ComponentFixture<CircleOfLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleOfLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleOfLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
