import { Input, Component, NgZone } from '@angular/core';
import { Application } from '../../../models/application.model';
import { EXCESS_CALL } from '../../on-push-config';

@Component({
  selector: 'app-application-without-on-push',
  templateUrl: './application-without-on-push.component.html',
  styleUrls: ['../without-on-push.css'],
})
export class ApplicationWithoutOnPushComponent {
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
}
