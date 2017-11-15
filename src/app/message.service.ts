import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {ServiceURL} from './service_url'

@Injectable()
export class MessageService {

constructor(private http: Http, private serviceURL: ServiceURL) { }

  getAllMessages() {
    return this.http.get(this.serviceURL.MESSAGE_SERVICE_BASE_URL + this.serviceURL.GET_ALL_MESSAGES)
  }

  getCircleMessages(circleID: string) {
    return this.http.get(this.serviceURL.MESSAGE_SERVICE_BASE_URL + this.serviceURL.GET_CIRCLE_MESSAGES + '/' + circleID)
  }

  getUserMessages(userID: string) {
    return this.http.get(this.serviceURL.MESSAGE_SERVICE_BASE_URL + this.serviceURL.GET_USER_MESSAGES + '/' + userID)
  }

}
