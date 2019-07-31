import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { Application } from '../../../models/application.model';
import { EXCESS_CALL } from '../../on-push-config';

@Component({
  selector: 'app-application-with-on-push',
  templateUrl: './application-with-on-push.component.html',
  styleUrls: ['../with-on-push.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationWithOnPushComponent {
  @Input() application: Application;

  check() {
    if (this.application.id) {
      console.log('Application component was checked ' + this.application.id);
    }

    if (EXCESS_CALL) {
      let start = 0;
      while (start < 100000000) {
        start++;
      }
    }
  }

  getApplicationStatus() {
    return this.application.status;
  }
}
