import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationAsyncService {

  private statusChangeSubscription: Subject<number>;
  private currentStatus: number;

  constructor(

  ){
    this.currentStatus = 1;
    this.statusChangeSubscription = new Subject();
    setInterval(() => {
      this.currentStatus = ((this.currentStatus + 1) % 3) + 1;
      this.statusChangeSubscription.next(this.currentStatus);
    }, 1000);
  }

  get() {
    return this.statusChangeSubscription;
  }
}