import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { ColorTextDirective } from './directives/color-text.directive';
import { SnarkyTextPipe } from './pipes/snarky-text.pipe';



@NgModule({
  declarations: [
    FooComponent,
    ColorTextDirective,
    SnarkyTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [FooComponent, ColorTextDirective, SnarkyTextPipe],
})
export class TestModule { }
