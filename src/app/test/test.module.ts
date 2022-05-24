import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from '../foo/foo.component';
import { ColorTextDirective } from '../color-text.directive';



@NgModule({
  declarations: [
    FooComponent,
    ColorTextDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [FooComponent, ColorTextDirective],
})
export class TestModule { }
