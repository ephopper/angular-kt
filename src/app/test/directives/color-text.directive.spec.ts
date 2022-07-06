import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorTextDirective } from './color-text.directive';

class MockElementRef extends ElementRef {
  public override nativeElement: any;
}

@Component({
  template: `<p appColorText [color]="'red'">foo</p>`
})
class MockHostComponent {
}

describe('ColorTextDirective', () => {
  let directive: ColorTextDirective;
  let fixture: ComponentFixture<MockHostComponent>;
  let pTag: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockHostComponent, ColorTextDirective],
      providers: [
        ColorTextDirective,
        { provide: ElementRef, useClass: MockElementRef },
      ],
    });

    directive = TestBed.inject(ColorTextDirective);
    fixture = TestBed.createComponent(MockHostComponent);
    fixture.detectChanges();
    pTag = fixture.debugElement.query(By.css('p'));
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should apply the correct color to the element', () => {
    expect(pTag.nativeNode.style.color).toBe('red');
  });
});
