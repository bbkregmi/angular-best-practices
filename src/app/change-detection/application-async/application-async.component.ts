import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ApplicationStatus } from '../models/application.model';
import { ApplicationAsyncService } from './application-async.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './application-async.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationAsyncComponent implements OnInit, OnDestroy {

  status: number;
  statusSubscription: Subscription;

  constructor(
    private applicationAsyncService: ApplicationAsyncService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.statusSubscription = this.applicationAsyncService.get()
    .subscribe((status) => {
      this.status = status;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    this.applicationAsyncService.stop();
    this.statusSubscription.unsubscribe();
  }

  getStatus(status: ApplicationStatus) {
    switch(status) {
      case ApplicationStatus.RUNNING:
        return 'Running';
      case ApplicationStatus.PAUSED:
        return 'Paused';
      case ApplicationStatus.OFFLINE:
        return 'Offline';
      default:
        return 'Processing';
    }
  }
}
