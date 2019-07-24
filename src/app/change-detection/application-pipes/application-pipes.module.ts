import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserFullName } from './user-full-name.pipe';
import { Routes, RouterModule } from '@angular/router';


const applicationPipeRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(applicationPipeRoutes)
  ],
  declarations: [
    UserComponent,
    UserFullName
  ],
  exports: [
    UserComponent,
  ]
})
export class ApplicationPipesModule {}
