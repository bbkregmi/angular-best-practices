import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatacenterWithOnPushComponent } from './datacenter-with-on-push/datacenter-with-on-push.component';
import { StatusWithOnPushComponent } from './status-with-on-push/status-with-on-push.component';
import { ApplicationWithOnPushComponent } from './application-with-on-push/application-with-on-push.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
  ],
  declarations: [
    ApplicationWithOnPushComponent,
    DatacenterWithOnPushComponent,
    StatusWithOnPushComponent
  ],
  entryComponents: [
    DatacenterWithOnPushComponent
  ],
})
export class WithOnPushModule {
  static rootComponent = DatacenterWithOnPushComponent;
}
