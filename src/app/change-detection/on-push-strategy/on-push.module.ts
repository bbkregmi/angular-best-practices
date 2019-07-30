import { OnPushContainerComponent } from './on-push-container.component';
import { NgModule } from '@angular/core';
import { WithoutOnPushModule } from './without-on-push/without-on-push.module';
import { CommonModule } from '@angular/common';
import { OnPushDomModule } from './with-on-push-dom/on-push-dom.module';
import { Routes, RouterModule } from '@angular/router';
import { LoadModuleDirective } from 'src/app/lazy-load-config/load-module.directive';

const onPushRoute: Routes = [
  {
    path: '',
    component: OnPushContainerComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(onPushRoute),
    WithoutOnPushModule,
    OnPushDomModule,
  ],
  declarations: [
    OnPushContainerComponent,
    LoadModuleDirective
  ]
})
export class OnPushModule {}
