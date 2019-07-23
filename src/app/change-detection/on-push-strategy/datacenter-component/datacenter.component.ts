import { Component } from '@angular/core';
import { Application, ApplicationStatus, ApplicationStatusEvent } from '../../models/application.model';



@Component({
  selector: 'app-datacenter',
  templateUrl: './datacenter.component.html',
  styleUrls: ['../../../app.component.css']
})
export class DatacenterComponent {
  applications: Array<Application> = [
    {
      name: 'App 1',
      id: 1,
      status: ApplicationStatus.RUNNING
    },
    {
      name: 'App 2',
      id: 2,
      status: ApplicationStatus.PAUSED
    },
    {
      name: 'App 3',
      id: 3,
      status: ApplicationStatus.OFFLINE
    }
  ];

  status: ApplicationStatus;


  check() {
    console.log('Datacenter view checked');
  }

  onStatusChange(statusChangeEvent: ApplicationStatusEvent) {
    const index = this.applications.findIndex((app) => {
      return app.id === statusChangeEvent.id;
    });

    this.applications[index].status = statusChangeEvent.status;
  }
}
