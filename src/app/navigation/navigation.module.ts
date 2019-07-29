import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation-component/navigation.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';
import { NavigationRouterModule } from './navigation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NavigationRouterModule
  ],
  declarations: [
    NavigationComponent,
    NavigationLinkComponent
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {}
