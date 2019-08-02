import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const navigationRoutes: Routes = [
  {
    path: 'on-push-demo',
    loadChildren: '../change-detection/on-push-strategy/on-push.module#OnPushModule',
  },
  {
    path: 'async-demo',
    loadChildren: '../change-detection/application-async/application-async.module#ApplicationAsyncModule',
    data: {
      preload: true
    }
  },
  {
    path: 'pipes-demo',
    loadChildren: '../change-detection/application-pipes/application-pipes.module#ApplicationPipesModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(navigationRoutes)
  ]
})
export class NavigationRouterModule {};
