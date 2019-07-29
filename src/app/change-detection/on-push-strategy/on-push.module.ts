import { OnPushContainerComponent } from './on-push-container.component';
import { NgModule } from '@angular/core';
import { WithoutOnPushModule } from './without-on-push/without-on-push.module';
import { WithOnPushModule } from './with-on-push/with-on-push.module';
import { CommonModule } from '@angular/common';
import { OnPushDomModule } from './with-on-push-dom/on-push-dom.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
  imports: [
    CommonModule,
    WithoutOnPushModule,
    WithOnPushModule,
    OnPushDomModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    CdkTableModule,
    CdkAccordionModule,
    CdkTreeModule,
    CdkStepperModule,
  ],
  declarations: [
    OnPushContainerComponent
  ],
})
export class OnPushModule {}
