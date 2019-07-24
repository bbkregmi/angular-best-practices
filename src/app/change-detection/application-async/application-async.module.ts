import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationAsyncComponent } from './application-async.component';
import { ApplicationAsyncService } from './application-async.service';


@NgModule({
  imports: [
    CommonModule,
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
