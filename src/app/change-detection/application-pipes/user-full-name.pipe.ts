import { PipeTransform, Pipe } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'fullName'
})
export class UserFullName implements PipeTransform {

  transform(user: User): string {
    console.log('user full name pipe called');
    return `${user.firstName} ${user.lastName}`;
  }
}