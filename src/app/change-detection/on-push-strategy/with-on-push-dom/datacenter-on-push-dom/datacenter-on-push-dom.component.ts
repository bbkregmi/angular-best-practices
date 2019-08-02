import { Component, OnInit } from '@angular/core';
import { Application, ApplicationStatus, ApplicationStatusEvent } from '../../../models/application.model';
import { NUM_APP_TO_DISPLAY, SHOW_CONSOLE_LOG } from '../../on-push-config';


@Component({
  selector: 'app-datacenter-on-push-dom',
  templateUrl: './datacenter-on-push-dom.component.html',
  styleUrls: ['../on-push-dom.css']
})
export class DatacenterOnPushDomComponent implements OnInit {
  applications: Array<Application>;

  status: ApplicationStatus;

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

  onStatusChange(statusChangeEvent: ApplicationStatusEvent) {
    const index = this.applications.findIndex((app) => {
      return app.id === statusChangeEvent.id;
    });

    this.applications[index].status = statusChangeEvent.status;
  }

  trackByFn(index: number, application: Application) {
    return application.id;
  }
}