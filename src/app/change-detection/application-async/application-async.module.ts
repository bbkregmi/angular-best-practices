import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationAsyncComponent } from './application-async.component';

const applicationAsyncRoute: Routes = [
  {
    path: '',
    component: ApplicationAsyncComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(applicationAsyncRoute)
  ],
  declarations: [
    ApplicationAsyncComponent
  ],
  exports: [
    ApplicationAsyncComponent,
    RouterModule
  ]
})
export class ApplicationAsyncModule {}
