import { Injectable } from '@angular/core';

import {MESSAGES} from './message/mock-message';

import {Message} from './message/message';



@Injectable()
export class MessageService {
  selectedMessages:Message[] = [];
  getAllMessages():Message[]{
    return MESSAGES;
  }

  constructor() { }
  getMessages(): Promise<Message[]>{
    return Promise.resolve(MESSAGES);
  }

  getCircleMessages(circleName:string):Promise<Message[]>{
    alert('getting from message service. selected circle : ' +circleName )
   
   
   return this.getMessages().then(messages =>messages.filter(message => message.circleName==circleName));
   
    
   
  }

}
