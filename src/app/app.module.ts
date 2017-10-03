import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondTestComponentComponent } from './second-test-component/second-test-component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventHandelingComponent } from './event-handeling/event-handeling.component';
import { CssBindingComponent } from './css-binding/css-binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TepmlateServiceService } from './tepmlate-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SecondTestComponentComponent,
    DataBindingComponent,
    EventHandelingComponent,
    CssBindingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [TepmlateServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
