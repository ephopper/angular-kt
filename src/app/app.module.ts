import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LifecycleModule } from './test/lifecycle/lifecycle.module';
import { TestModule } from './test/test.module';
import { ObservablesModule } from './observables/observables.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule,
    LifecycleModule,
    TestModule,
    ObservablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
