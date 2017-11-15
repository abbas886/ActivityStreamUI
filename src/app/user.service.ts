import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {ServiceURL} from './service_url'

@Injectable()
export class UserService {
   constructor(private http: Http, private serviceURL: ServiceURL) {

  }

  getAllUsers() {
    return this.http.get(this.serviceURL.USER_SERVICE_BASE_URL + this.serviceURL.GET_ALL_USERS);
  }


}
