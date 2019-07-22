import { Input, Component } from '@angular/core';
import { Application } from '../../models/application.model';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationComponent {
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
