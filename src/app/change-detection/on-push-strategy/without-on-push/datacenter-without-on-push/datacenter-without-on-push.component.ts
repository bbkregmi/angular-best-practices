import { Component, OnInit } from '@angular/core';
import { Application, ApplicationStatus } from '../../../models/application.model';
import { NUM_APP_TO_DISPLAY_FOR_ONPUSH } from '../../../../on-push-config';


@Component({
  selector: 'app-datacenter-without-on-push',
  templateUrl: './datacenter-without-on-push.component.html',
  styleUrls: ['../without-on-push.css']
})
export class DatacenterWithoutOnPushComponent implements OnInit {
  applications: Array<Application>;

  status: ApplicationStatus;

  ngOnInit() {
    this.applications = [];
    for (let i = 1; i <= NUM_APP_TO_DISPLAY_FOR_ONPUSH; i++) {
      this.applications.push({
        name: `App ${i}`,
        id: i,
        status: (i % 3) + 1
      });
    }
  }

  check() {
    console.log('Datacenter view checked');
  }

  onStart(application: Application) {
    application.status = ApplicationStatus.RUNNING;
  }

  onPause(application: Application) {
    application.status = ApplicationStatus.PAUSED;
  }

  onShutDown(application: Application) {
    application.status = ApplicationStatus.OFFLINE;
  }
}
