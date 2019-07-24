import { ApplicationAsyncComponent } from './application-async/application-async.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './application-pipes/user.component';
import { NgModule } from '@angular/core';
import { DatacenterComponent } from './on-push-strategy/datacenter-component/datacenter.component';

const changeDetectionRoutes: Routes = [
  {
    path: 'onpush',
    component: DatacenterComponent
  },
  {
    path: 'application-async',
    component: ApplicationAsyncComponent
  },
  {
    path: 'pipes',
    component: UserComponent
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
