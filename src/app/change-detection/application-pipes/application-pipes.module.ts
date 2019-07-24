import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserFullName } from './user-full-name.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UserComponent,
    UserFullName
  ],
  exports: [
    UserComponent,
  ]
})
export class ApplicationPipeModule {}
