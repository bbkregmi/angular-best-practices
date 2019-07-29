import { Input, Component, OnChanges } from '@angular/core';
import { ApplicationStatus } from '../../../models/application.model';

@Component({
  selector: 'app-status-without-on-push',
  templateUrl: './status-without-on-push.component.html',
  styleUrls: ['../without-on-push.css']
})
export class StatusWithoutOnPushComponent implements OnChanges {
  @Input() status: ApplicationStatus;

  statusText: string;

  ngOnChanges() {
    switch(this.status) {
      case ApplicationStatus.RUNNING:
        this.statusText = 'Running';
        break;
      case ApplicationStatus.PAUSED:
        this.statusText = 'Paused';
        break;
      case ApplicationStatus.OFFLINE:
        this.statusText = 'Offline';
        break;
      default:
        this.statusText = 'Processing';
    }
  }

  check() {
    console.log('Status icon component checked ' + this.statusText);
  }
}
