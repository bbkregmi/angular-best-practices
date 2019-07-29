import { Component, OnInit } from '@angular/core';

enum OnPushState {
  SHOW_WITHOUT_ONPUSH,
  SHOW_WITH_ONPUSH,
  SHOW_WITH_ONPUSH_DOM
}

@Component({
  selector: 'app-on-push-demo',
  templateUrl: './on-push-container.component.html',
  styleUrls: ['./on-push-container.component.css']
})
export class OnPushContainerComponent implements OnInit {

  containerState: OnPushState;
  OnPushState = OnPushState;

  ngOnInit() {
    this.containerState = OnPushState.SHOW_WITHOUT_ONPUSH;
  }

  switchContainer(containerState: OnPushState) {
    this.containerState = containerState;
  }

}
