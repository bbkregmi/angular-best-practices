import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

const appRootRoute: Routes = [
  {
    path: '',
    component: ChangeDetectionComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ChangeDetectionModule,
    RouterModule.forRoot(appRootRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
