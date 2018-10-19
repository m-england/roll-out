import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  public user: User;
  public roles: string[] = ['LO', 'AM', 'B', 'UW', 'CL', 'FN'];

  userForm = this.fb.group({
    role: ['']
  });

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(u => this.user = u);
    this.userForm.patchValue(this.user);
  }

  changeRole() {
    this.userService.updateRole(this.userForm.value.role);
  }

  print() {
    console.log(this.user);
  }
}
