import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { AppMainModule } from './app-main/app-main.module';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app-main/app-main.component';
import { StoreModule } from '@ngrx/store';

const appRootRoute: Routes = [
  {
    path: '',
    component: AppMainComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRootRoute),
    AppMainModule,
    NavigationModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
