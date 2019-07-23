import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ApplicationStatus } from '../models/application.model';
import { ApplicationAsyncService } from './application-async.service';

@Component({
  selector: 'app-async',
  templateUrl: './application-async.component.html',
})
export class ApplicationAsyncComponent implements OnInit {

  status: ApplicationStatus;

  constructor(
    private applicationAsyncService: ApplicationAsyncService
  ) {}

  ngOnInit() {
    this.applicationAsyncService.get().subscribe((status) => {
      this.status = status;
    });
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