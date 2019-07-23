import { Input, Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Application, ApplicationStatusEvent, ApplicationStatus } from '../../models/application.model';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['../../../app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationComponent {
  @Input() application: Application;

  @Output() statusChange = new EventEmitter<ApplicationStatusEvent>()
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
