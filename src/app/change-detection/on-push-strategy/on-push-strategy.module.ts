import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatacenterComponent } from './datacenter-component/datacenter.component';
import { StatusIconComponent } from './status-icon-component/status-icon.component';
import { ApplicationComponent } from './application-component/application.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ApplicationComponent,
    DatacenterComponent,
    StatusIconComponent
  ],
  exports: [
    DatacenterComponent,
  ]
})
export class OnPushModule {}
