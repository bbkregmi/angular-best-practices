import { Application } from './application.model';
import { SimpleModel } from './simple-model.model';

export class Datacenter extends SimpleModel {
  applications: Application[];
  location: string;
}