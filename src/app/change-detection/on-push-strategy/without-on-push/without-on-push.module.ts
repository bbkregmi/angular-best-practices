import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationWithoutOnPushComponent } from './application-without-on-push/application-without-on-push.component';
import { DatacenterWithoutOnPushComponent } from './datacenter-without-on-push/datacenter-without-on-push.component';
import { StatusWithoutOnPushComponent } from './status-without-on-push/status-without-on-push.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  imports: [
    CommonModule,
    ScrollingModule
  ],
  declarations: [
    ApplicationWithoutOnPushComponent,
    DatacenterWithoutOnPushComponent,
    StatusWithoutOnPushComponent
  ],
  exports: [
    DatacenterWithoutOnPushComponent,
  ]
})
export class WithoutOnPushModule {}
