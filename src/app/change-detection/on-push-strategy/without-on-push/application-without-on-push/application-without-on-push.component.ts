import { Input, Component } from '@angular/core';
import { Application } from '../../../models/application.model';

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

  }
}
