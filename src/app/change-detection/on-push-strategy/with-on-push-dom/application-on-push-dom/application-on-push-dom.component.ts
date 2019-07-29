import { Input, Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Application, ApplicationStatusEvent, ApplicationStatus } from '../../../models/application.model';

@Component({
  selector: 'app-application-on-push-dom',
  templateUrl: './application-on-push-dom.component.html',
  styleUrls: ['../on-push-dom.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationOnPushDomComponent {
  @Input() application: Application;

  @Output() statusChange = new EventEmitter<ApplicationStatusEvent>();

  check() {
    if (this.application.id) {
      console.log('Application component was checked ' + this.application.id);
    }

  }

  getApplicationStatus() {
    return this.application.status;
  }

  onStart() {
    this.statusChange.emit({
      id: this.application.id,
      status: ApplicationStatus.RUNNING
    });
  }

  onPause() {
    this.statusChange.emit({
      id: this.application.id,
      status: ApplicationStatus.PAUSED
    });
  }

  onShutDown() {
    this.statusChange.emit({
      id: this.application.id,
      status: ApplicationStatus.OFFLINE
    });
  }
}