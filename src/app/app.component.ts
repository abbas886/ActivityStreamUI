import { Component, OnInit, Input, Output } from '@angular/core';
import { Message, CommonMessage } from './message/message'
import { User } from './user/user'
import { Circle } from './circle/circle'


import { CircleService } from './circle.service';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  circles: Circle[] = [];
  users: User[] = [];
  @Input()
  commonMessage: CommonMessage;


  constructor(private circleService: CircleService,
    private userService: UserService) {

  }

  getAllCircles() {

    this.circleService.getAllCircles().subscribe(circledata => {
      this.circles = circledata.json();
      this.userService.getAllUsers().subscribe(userdata => {
        this.users = userdata.json();
      })
    })

  }

  getAllUsers() {

    this.userService.getAllUsers().subscribe(data => {
      this.users = data.json();
    })

  }

  onCircleMessages(commonMessage: CommonMessage) {
    this.commonMessage = commonMessage;
  }

  onUserMessages(commonMessage: CommonMessage) {
    this.commonMessage = commonMessage;
  }


  ngOnInit() {

    this.getAllCircles();
    //this.getAllUsers();
  }

}


