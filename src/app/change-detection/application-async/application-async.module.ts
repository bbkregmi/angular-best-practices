import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationAsyncComponent } from './application-async.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ApplicationAsyncComponent
  ],
  exports: [
    ApplicationAsyncComponent,
  ]
})
export class ApplicationAsyncModule {}
