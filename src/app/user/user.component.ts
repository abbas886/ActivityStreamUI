import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user';
import { MessageService } from '../message.service';
import { Message, CommonMessage } from '../message/message'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  users: User[] = [];

  userMessages: Message[] = [];

  commonMessageTemp: CommonMessage;

  @Output()
  commonMessage: EventEmitter<CommonMessage> = new EventEmitter<CommonMessage>();

  selectedUser: User;
  constructor(
    private messageService: MessageService
  ) {


  }

  getUserMessages(userID: string) {
    this.messageService.getUserMessages(userID).subscribe(
      data => {
        this.userMessages = data.json();
        this.commonMessageTemp = new CommonMessage();
        this.commonMessageTemp.userName = userID;
        this.commonMessageTemp.messages = this.userMessages;

        this.commonMessage.emit(this.commonMessageTemp);
      }
    )
  }
  ngOnInit() {
  }

}


