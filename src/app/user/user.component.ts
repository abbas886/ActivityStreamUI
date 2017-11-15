import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  selectedUser: User;
  constructor(private userService: UserService) {
  
  }


  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit() {
   /* console.log('Calling ngOnInit of user component')
    this.userService.getAllUsers().subscribe(data => {
      this.users = data.json();
    })*/

  }

}


