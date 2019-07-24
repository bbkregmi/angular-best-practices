import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionComponent } from './change-detection.component';
import { ChangeDetectionRoutingModule } from './change-detection-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule
  ],
  declarations: [
    ChangeDetectionComponent
  ],
  exports: [
    ChangeDetectionComponent,
  ]
})
export class ChangeDetectionModule {}
