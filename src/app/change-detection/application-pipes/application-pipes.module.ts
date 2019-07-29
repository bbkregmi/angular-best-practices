import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserFullName } from './user-full-name.pipe';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UserFullName,
    UserComponent
  ],
  exports: [
    UserComponent,
  ]
})
export class ApplicationPipesModule {}
