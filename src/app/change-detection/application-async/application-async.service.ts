import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationAsyncService {

  private statusChangeSubscription: Subject<number>;
  private currentStatus: number;
  private intervalPromise;

  constructor(

  ){
    this.currentStatus = 0;
    this.statusChangeSubscription = new Subject();
  }

  get() {
    this.intervalPromise = setInterval(() => {
      this.currentStatus = ((this.currentStatus) % 3) + 1;
      this.statusChangeSubscription.next(this.currentStatus);
    }, 1000);

    return this.statusChangeSubscription.asObservable();
  }

  stop() {
    clearInterval(this.intervalPromise);
  }
}
