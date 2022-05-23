import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorText]'
})
export class ColorTextDirective implements OnInit {

  @Input() color: string = 'blue'

  constructor(private el: ElementRef) { }

  public ngOnInit(): void {
      this.el.nativeElement.style.color = this.color;
  }

}
