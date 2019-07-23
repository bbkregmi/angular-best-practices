import { NgModule } from '@angular/core';
import { ApplicationComponent } from './on-push-strategy/application-component/application.component';
import { DatacenterComponent } from './on-push-strategy/datacenter-component/datacenter.component';
import { StatusIconComponent } from './on-push-strategy/status-icon-component/status-icon.component';
import { CommonModule } from '@angular/common';
import { ApplicationAsyncComponent } from './application-async/application-async.component';
import { ApplicationAsyncService } from './application-async/application-async.service';
import { UserComponent } from './application-pipes/user.component';
import { UserFullName } from './application-pipes/user-full-name.pipe';
import { ResultsComponent } from './application-smart-dumb-component/search-result/search-results.component';
import { SearchService } from './application-smart-dumb-component/search.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultListComponent } from './application-smart-dumb-component/search-result-list/search-result-list.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],

  declarations: [
    ApplicationAsyncComponent,
    ApplicationComponent,
    DatacenterComponent,
    ResultsComponent,
    SearchResultListComponent,
    StatusIconComponent,
    UserComponent,
    UserFullName
  ],
  providers: [
    ApplicationAsyncService,
    SearchService,
  ],
  exports: [
    DatacenterComponent,
    ApplicationAsyncComponent,
    ResultsComponent,
    UserComponent
  ]
})
export class ChangeDetectionModule {}
