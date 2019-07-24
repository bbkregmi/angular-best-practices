import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationAsyncComponent } from './application-async.component';
import { ApplicationAsyncService } from './application-async.service';
import { Routes, RouterModule } from '@angular/router';

const applicationAsyncRoutes: Routes = [
  {
    path: '',
    component: ApplicationAsyncComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(applicationAsyncRoutes)
  ],
  declarations: [
    ApplicationAsyncComponent
  ],
  providers: [
    ApplicationAsyncService
  ],
  exports: [
    ApplicationAsyncComponent,
  ]
})
export class ApplicationAsyncModule {}
