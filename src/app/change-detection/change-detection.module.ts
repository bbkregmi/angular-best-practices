import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './application-smart-dumb-component/search-result/search-results.component';
import { SearchService } from './application-smart-dumb-component/search.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchResultListComponent } from './application-smart-dumb-component/search-result-list/search-result-list.component';
import { OnPushModule } from './on-push-strategy/on-push.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    OnPushModule
  ],
  declarations: [
    ResultsComponent,
    SearchResultListComponent,
  ],
  providers: [
    SearchService,
  ],
})
export class ChangeDetectionModule {}
