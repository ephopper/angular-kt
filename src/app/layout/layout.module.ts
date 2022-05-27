import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    LayoutComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent, CardComponent]
})
export class LayoutModule { }
