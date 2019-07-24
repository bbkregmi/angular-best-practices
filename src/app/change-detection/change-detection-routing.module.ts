import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const changeDetectionRoutes: Routes = [
  {
    path: 'onpush',
    loadChildren: './on-push-strategy/on-push-strategy.module#OnPushModule',
    data: {preload: true}
  },
  {
    path: 'application-async',
    loadChildren: './application-async/application-async.module#ApplicationAsyncModule'
  },
  {
    path: 'pipes',
    loadChildren: './application-pipes/application-pipes.module#ApplicationPipesModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(changeDetectionRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChangeDetectionRoutingModule {}
