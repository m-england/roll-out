import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public user: Observable<User>;

  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.user = this.userService.getUser();
  }
}
