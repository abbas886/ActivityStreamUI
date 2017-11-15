import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Circle } from './circle';
import { User } from '../user/user';
import { CircleService } from '../circle.service';
import { UserService } from '../user.service';
import { MessageService } from '../message.service';
import { Message } from '../message/message'
import { ActivatedRoute, ParamMap } from '@angular/router';
import {AppComponent} from '../app.component'

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  @Input()
  circles: Circle[] = [];

  circleMessages: Message[] = [];

  @Output()
  messages: EventEmitter<Message[]> = new EventEmitter<Message[]>();
 
  users: User[] = [];
  selectedCircle: Circle;
  selectedUser: User;


  constructor(
    private circleService: CircleService,
    private userService: UserService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  getCircleMessages(circleID: string) {
    this.messageService.getCircleMessages(circleID).subscribe(
      data => {
        this.circleMessages = data.json();
        this.messages.emit(this.circleMessages);
      }
    )
  }

  getUserMessages(userID: string) {
    this.messageService.getUserMessages(userID).subscribe(
      data => {
        this.messages = data.json();
      }
    )
  }

  /*

  getCircleMessages() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.messageService.getCircleMessages(params.get('id')))
      .subscribe(data => {
        this.messages = data.json();
      });
  }

  getAllCircles() {

    this.circleService.getAllCircles().subscribe(data => {
      this.circles = data.json();
    })

  }

  getAllUsers() {

    this.userService.getAllUsers().subscribe(data => {
      this.circles = data.json();
    })

  }
*/
  ngOnInit() {

   // this.getAllCircles();
   // this.getAllUsers();
    // this.getCircleMessages();
  }
}

