import { Injectable } from '@angular/core';
import {CIRCLES} from './circle/mock-circle';
import {Circle}  from './circle/circle';
/*import {MESSAGES}  from "./message/mock-message";
import {Message}  from "./message/message.component";
import {MessageService} from "./message.service";*/
@Injectable()
export class CircleService {

  getCircles():Circle[]{
   
  return CIRCLES;
  }




  constructor() { }

}

