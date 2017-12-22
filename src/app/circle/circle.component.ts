import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Circle } from './circle';
import { MessageService } from '../message.service';
import { Message, CommonMessage } from '../message/message'


@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  @Input()
  circles: Circle[] = [];

  circleMessages: Message[] = [];

  commonMessageTemp: CommonMessage;

  @Output()
  commonMessage: EventEmitter<CommonMessage> = new EventEmitter<CommonMessage>();
  selectedCircle: Circle;

  constructor(
    private messageService: MessageService
  ) { }

  getCircleMessages(circleID: string) {
    this.messageService.getCircleMessages(circleID).subscribe(
      data => {
        this.circleMessages = data.json();
        this.commonMessageTemp = new CommonMessage();
        this.commonMessageTemp.circleName = circleID;
        this.commonMessageTemp.messages = this.circleMessages
        this.commonMessage.emit(this.commonMessageTemp);
      }
    )
  }

  showCreateCircleWindow()
  {
    alert('clicked add circle')
  }



  ngOnInit() {

  }
}

