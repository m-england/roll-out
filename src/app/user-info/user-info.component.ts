import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  public user: User;
  public roles: string[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.roles = ['AM', 'LO', 'UW'];
    this.userService.getUser().subscribe(u => this.user = u);
  }

  print() {
    console.log(this.user);
  }
}
