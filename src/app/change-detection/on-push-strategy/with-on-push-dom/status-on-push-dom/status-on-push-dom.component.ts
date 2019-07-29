import { Input, Component, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { ApplicationStatus } from '../../../models/application.model';

@Component({
  selector: 'app-status-on-push-dom',
  templateUrl: './status-on-push-dom.component.html',
  styleUrls: ['../on-push-dom.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusOnPushDomComponent implements OnChanges {
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
