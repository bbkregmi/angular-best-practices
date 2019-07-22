import { Component } from '@angular/core';
import { Application, ApplicationStatus } from '../../models/application.model';

enum TestType {
  CHANGE_DETECTION,
  ASYNC_CHANGE,
  PIPE_CHANGE,
  SMART_DUMB_COMPONENT
};

@Component({
  selector: 'app-datacenter',
  templateUrl: './datacenter.component.html'
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
  testType = TestType.SMART_DUMB_COMPONENT;
  TestType = TestType;

  check() {
    console.log('Datacenter view checked');
  }

  changeStatus() {
    this.applications[0] = {...this.applications[0], status: ApplicationStatus.OFFLINE };
  }
}
