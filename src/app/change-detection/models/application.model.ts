import { SimpleModel } from './simple-model.model';

export enum ApplicationStatus {
  RUNNING = 1,
  PAUSED,
  OFFLINE
}

export class Application extends SimpleModel {
  status: ApplicationStatus;
}
