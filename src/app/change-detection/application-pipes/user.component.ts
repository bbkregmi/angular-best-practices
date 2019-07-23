import { Component, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../models/user.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

  user: User =  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
    role: 'Admin'
  };

  getFullName() {
    console.log('Get full name called');
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  changeRole() {
    this.user.role = 'Viewer';
  }

  changeUser() {
    this.user.firstName = 'Mary';
  }
}
