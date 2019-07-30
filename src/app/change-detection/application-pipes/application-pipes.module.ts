import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserFullName } from './user-full-name.pipe';
import { UserComponent } from './user.component';


const applicationPipeRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(applicationPipeRoutes),
  ],
  declarations: [
    UserFullName,
    UserComponent
  ],
})
export class ApplicationPipesModule {}
