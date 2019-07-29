import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ApplicationOnPushDomComponent } from './application-on-push-dom/application-on-push-dom.component';
import { DatacenterOnPushDomComponent } from './datacenter-on-push-dom/datacenter-on-push-dom.component';
import { StatusOnPushDomComponent } from './status-on-push-dom/status-on-push-dom.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule
  ],
  declarations: [
    ApplicationOnPushDomComponent,
    DatacenterOnPushDomComponent,
    StatusOnPushDomComponent
  ],
  exports: [
    DatacenterOnPushDomComponent
  ]
})
export class OnPushDomModule {}
