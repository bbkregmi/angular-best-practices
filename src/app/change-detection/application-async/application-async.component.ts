import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ApplicationStatus } from '../models/application.model';
import { ApplicationAsyncService } from './application-async.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './application-async.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationAsyncComponent implements OnInit {

  status: Observable<number>;

  constructor(
    private applicationAsyncService: ApplicationAsyncService
  ) {}

  ngOnInit() {
    this.status = this.applicationAsyncService.get();
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