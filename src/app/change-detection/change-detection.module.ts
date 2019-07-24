import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionComponent } from './change-detection.component';
import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { OnPushModule } from './on-push-strategy/on-push-strategy.module';
import { ApplicationAsyncModule } from './application-async/application-async.module';
import { ApplicationPipeModule } from './application-pipes/application-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule,
    OnPushModule,
    ApplicationAsyncModule,
    ApplicationPipeModule
  ],
  declarations: [
    ChangeDetectionComponent
  ],
  exports: [
    ChangeDetectionComponent,
  ]
})
export class ChangeDetectionModule {}
