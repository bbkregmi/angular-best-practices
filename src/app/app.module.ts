import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { AppMainModule } from './app-main/app-main.module';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app-main/app-main.component';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';

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
    RouterModule.forRoot(appRootRoute, {preloadingStrategy: CustomPreloadingStrategy }),
    AppMainModule,
    NavigationModule,
  ],
  providers: [
    {
      provide: NgModuleFactoryLoader,
      useClass: SystemJsNgModuleLoader
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
