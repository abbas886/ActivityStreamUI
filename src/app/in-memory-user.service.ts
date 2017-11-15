import { Injectable } from '@angular/core';
import {USERS} from './user/mock-user';
import {User} from './user/user';

@Injectable()
export class UserService {

  getUsers():User[]
  {
    return USERS;
  }

  constructor() { }

}
