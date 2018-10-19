import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new ReplaySubject<User>(1);
  private hasUser: boolean = false;

  constructor() { }

  public getUser(): Observable<User> {
    if (!this.hasUser) {
      this.fetchUser();
    }
    return this.userSubject.asObservable();
  }

  private fetchUser(): void {
    const newUser = new User();
    newUser.userName = 'Mark';
    newUser.email = 'test@tmoney.us';
    newUser.role = 'LO';

    this.hasUser = true;
    this.userSubject.next(newUser);
    this.userSubject.complete();
  }
}
