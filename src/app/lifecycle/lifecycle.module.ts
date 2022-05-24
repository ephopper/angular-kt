import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleOfLifeComponent } from '../circle-of-life/circle-of-life.component';



@NgModule({
  declarations: [
    CircleOfLifeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CircleOfLifeComponent]
})
export class LifecycleModule { }
