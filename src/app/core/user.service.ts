import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new ReplaySubject<User>(1);
  private hasUser: boolean = false;
  private user: User = null;

  constructor() { }

  public getUser(): Observable<User> {
    if (!this.hasUser) {
      this.fetchUser();
    }
    return this.userSubject.asObservable();
  }

  public updateRole(role: string): void {
    if (role) { this.user.role = role; }
    this.updateSubscribers();
  }

  private fetchUser(): void {
    const newUser = new User();
    newUser.userName = 'Mark';
    newUser.email = 'test@tmoney.us';
    newUser.role = 'UW';

    this.user = newUser;
    this.updateSubscribers();
  }

  private updateSubscribers() {
    this.userSubject.next(this.user);
  }
}
