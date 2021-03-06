import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Application, ApplicationStatus } from '../../../models/application.model';
import { NUM_APP_TO_DISPLAY, SHOW_CONSOLE_LOG } from '../../on-push-config';


@Component({
  selector: 'app-datacenter-with-on-push',
  templateUrl: './datacenter-with-on-push.component.html',
  styleUrls: ['../with-on-push.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatacenterWithOnPushComponent implements OnInit {
  applications: Array<Application>;

  ngOnInit() {
    this.applications = [];
    for (let i = 1; i <= NUM_APP_TO_DISPLAY; i++) {
      this.applications.push({
        name: `App ${i}`,
        id: i,
        status: (i % 3) + 1
      });
    }
  }

  check() {
    if (SHOW_CONSOLE_LOG) {
      console.log('Datacenter view checked');
    }
  }

  onStart(application: Application) {
    const appIndex = this.getIndex(application);
    this.applications[appIndex] =  {...this.applications[appIndex], status: ApplicationStatus.RUNNING};
  }

  onPause(application: Application) {
    const appIndex = this.getIndex(application);
    this.applications[appIndex] = {...this.applications[appIndex], status: ApplicationStatus.PAUSED};
  }

  onShutDown(application: Application) {
    const appIndex = this.getIndex(application);
    this.applications[appIndex] = {...this.applications[appIndex], status: ApplicationStatus.OFFLINE};
  }

  trackByFn(index: number, application: Application) {
    return application.id;
  }

  private getIndex(application: Application): number {
    return this.applications.findIndex((app) => {
      return app.id === application.id;
    });
  }
}
