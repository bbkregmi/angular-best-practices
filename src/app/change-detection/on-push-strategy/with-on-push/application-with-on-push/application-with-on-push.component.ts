import { Input, Component, ChangeDetectionStrategy } from '@angular/core';
import { Application } from '../../../models/application.model';

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

  }

  getApplicationStatus() {
    return this.application.status;
  }
}
