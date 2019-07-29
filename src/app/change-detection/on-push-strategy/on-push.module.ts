import { OnPushContainerComponent } from './on-push-container.component';
import { NgModule } from '@angular/core';
import { WithoutOnPushModule } from './without-on-push/without-on-push.module';
import { WithOnPushModule } from './with-on-push/with-on-push.module';
import { CommonModule } from '@angular/common';
import { OnPushDomModule } from './with-on-push-dom/on-push-dom.module';


@NgModule({
  imports: [
    CommonModule,
    WithoutOnPushModule,
    WithOnPushModule,
    OnPushDomModule,
  ],
  declarations: [
    OnPushContainerComponent
  ],
})
export class OnPushModule {}
