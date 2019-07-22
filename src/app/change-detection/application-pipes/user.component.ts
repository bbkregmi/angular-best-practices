import { Component } from "@angular/core";
import { User } from '../models/user.model';
import { SimpleModel } from '../models/simple-model.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent {

  user: User =  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
    role: 'Admin'
  };

  organization: SimpleModel = {
    id: 1,
    name: 'Organization 1'
  };

  getFullName() {
    console.log('Get full name called');
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  changeOrganization() {
    this.organization.name = 'Organization 2';
  }

  changeUser() {
    this.user = {...this.user, firstName: 'Mary'};
  }
}
