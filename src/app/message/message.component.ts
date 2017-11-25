import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../message.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Message, CommonMessage } from './message'
import { Circle } from '../circle/circle';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()
  commonMessage: CommonMessage;

  enterredMessage: string;
  newMessage: Message;
  status: string;
  circle: Circle;
  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  sendMessage(event) {

    if (event.keyCode === 13) {
      this.newMessage = new Message();
      this.newMessage.message = event.target.value;
      this.newMessage.senderID = 'Abbas';
      this.newMessage.postedDate = new Date();
      this.newMessage.circleName = this.commonMessage.circleName;
      this.newMessage.receiverID = this.commonMessage.userName;
      this.commonMessage.messages.push(this.newMessage);
      this.enterredMessage = '';
      this.postMessage(this.newMessage);
    }
  }


  private postMessage(message: Message) {
    alert('sending message:' + message)
    this.messageService.postMessage(message).subscribe(data => {

      this.status = data.json();
      alert('status : ' + this.status);
    }
    )
  }




  ngOnInit(): void {
  }

}



