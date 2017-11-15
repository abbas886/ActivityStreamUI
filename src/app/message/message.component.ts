import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../message.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Message } from './message'
import { Circle } from '../circle/circle';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() messages: Message[] = [];
  circle: Circle;
  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location) {
  }



  ngOnInit(): void {
  /* this.messageService.getCircleMessages(this.circle.id).subscribe(
      data => {
        this.messages = data.json();
      }
    )

    this.route.paramMap
    .switchMap((params: ParamMap) => this.messageService.getCircleMessages(params.get('id')))
    .subscribe(data => {
      this.messages = data.json();
    });*/
  }

}



