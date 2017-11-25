import { Injectable } from '@angular/core';
@Injectable()
export class ServiceURL {

   public USER_SERVICE_BASE_URL = 'http://localhost:9000/activitystream';
   public  CIRCLE_SERVICE_BASE_URL = 'http://localhost:7000/activitystream';
   public MESSAGE_SERVICE_BASE_URL = 'http://localhost:8100/activitystream';

   public GET_ALL_USERS = '/users';
   public GET_ALL_CIRCLES = '/allcircles';
   public GET_USER_MESSAGES = '/messages/user/'
   public GET_CIRCLE_MESSAGES = '/messages/circle/'

   public GET_ALL_MESSAGES = '/allmessages'
   public POST_MESSAGE = '/message/send/';
}
