import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../change-detection/application-pipes/user.component';
import { OnPushContainerComponent } from '../change-detection/on-push-strategy/on-push-container.component';
import { ApplicationAsyncComponent } from '../change-detection/application-async/application-async.component';
import { OnPushModule } from '../change-detection/on-push-strategy/on-push.module';
import { ApplicationAsyncModule } from '../change-detection/application-async/application-async.module';
import { ApplicationPipesModule } from '../change-detection/application-pipes/application-pipes.module';

const navigationRoutes: Routes = [
  {
    path: 'on-push-demo',
    component: OnPushContainerComponent
  },
  {
    path: 'async-demo',
    component: ApplicationAsyncComponent
  },
  {
    path: 'pipes-demo',
    component: UserComponent
  }
];



@NgModule({
  imports: [
    RouterModule.forChild(navigationRoutes),
    OnPushModule,
    ApplicationAsyncModule,
    ApplicationPipesModule,
  ],
  exports: [
    RouterModule
  ]
})
export class NavigationRouterModule {};
