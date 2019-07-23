import { Component } from '@angular/core';

enum TestType {
  CHANGE_DETECTION,
  ASYNC_CHANGE,
  PIPE_CHANGE,
  SMART_DUMB_COMPONENT
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testType = TestType.CHANGE_DETECTION;
  TestType = TestType;
}
