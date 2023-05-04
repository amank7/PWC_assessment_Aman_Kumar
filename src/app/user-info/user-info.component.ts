import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { users } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  users: any = []

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      console.log(data)
      this.users = data
      console.log(this.users)
    })
  }



}
