import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';



@NgModule({
  declarations: [
    ObservablesDemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ObservablesDemoComponent,
  ]
})
export class ObservablesModule { }
