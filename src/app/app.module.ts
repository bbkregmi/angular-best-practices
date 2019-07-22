import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangeDetectionModule } from './change-detection/change-detection.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ChangeDetectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
