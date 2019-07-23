import { Component } from '@angular/core';
import { Application, ApplicationStatus } from '../../models/application.model';



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

  onStart(application: Application) {
    const appIndex = this.getIndex(application);
    this.applications[appIndex] = {...this.applications[appIndex], status: ApplicationStatus.RUNNING};
  }

  onPause(application: Application) {
    const appIndex = this.getIndex(application);
    this.applications[appIndex] = {...this.applications[appIndex], status: ApplicationStatus.PAUSED};
  }

  onShutDown(application: Application) {
    const appIndex = this.getIndex(application);
    this.applications[appIndex] = {...this.applications[appIndex], status: ApplicationStatus.OFFLINE};
  }

  private getIndex(application: Application): number {
    return this.applications.findIndex((app) => {
      return app.id === application.id;
    });
  }
}
