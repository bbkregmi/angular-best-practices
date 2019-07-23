import { Subscription, Subject } from 'rxjs';

export class ApplicationAsyncService {

  private statusChangeSubscription: Subject<number>;
  private currentStatus: number;

  constructor(

  ){
    this.currentStatus = 0;
    this.statusChangeSubscription = new Subject();
    this.statusChangeSubscription.next(this.currentStatus);
    setInterval(() => {
      this.currentStatus = ((this.currentStatus) % 3) + 1;
      this.statusChangeSubscription.next(this.currentStatus);
    }, 1000);
  }

  get() {
    return this.statusChangeSubscription.asObservable();
  }
}