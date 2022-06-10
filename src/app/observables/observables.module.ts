import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';
import { MemoryLeakComponent } from './memory-leak/memory-leak.component';



@NgModule({
  declarations: [
    ObservablesDemoComponent,
    MemoryLeakComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MemoryLeakComponent,
    ObservablesDemoComponent,
  ]
})
export class ObservablesModule { }
