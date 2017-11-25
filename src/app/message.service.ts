import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ServiceURL} from './service_url'

import {Message} from './message/message'

@Injectable()
export class MessageService {


 
    headers = new HttpHeaders({ 'Content-Type': 'application/json' })
 

   options = {
    headers: this.headers,
    observe: 'response', // to display the full response
    responseType: 'json'
};

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

  postMessage(message: Message) {
    return this.http.post(this.serviceURL.MESSAGE_SERVICE_BASE_URL + this.serviceURL.POST_MESSAGE, message)
  }



}
