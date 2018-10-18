import { TestBed, inject, async } from '@angular/core/testing';

import { WorkflowEventsService } from './workflow-events.service';
import { Observable, of, ReplaySubject } from 'rxjs';
import { User } from './models/user';
import { UserService } from './user.service';

class FakeUserService {
  private userSubject = new ReplaySubject<User>(1);
  private hasUser: boolean = false;

  public getUser(): Observable<User> {
    const user = new User();
    user.roles = ['LO'];
    return of(user)
  };

  private fetchUser() {}
}

fdescribe('WorkflowEventsService', () => {
  let service: WorkflowEventsService;
  let userserviceSpy: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserService', ['getUser']);

    TestBed.configureTestingModule({
      providers: [
        WorkflowEventsService,
        { provide: UserService, useValue: spy }
      ]
    });

    service = TestBed.get(WorkflowEventsService);
    userserviceSpy = TestBed.get(UserService);
  });


  it('should return true for LO to edit description', inject([WorkflowEventsService], (service: WorkflowEventsService) => {
    let stubUser = new User();
    stubUser.roles = ['LO'];

    userserviceSpy.getUser.and.returnValue(of(stubUser));

    const path = ['taskedit', 'description']
    const actual = service.checkAuthorization(path);

    service.checkAuthorization(path).subscribe(actual => {
      expect(actual).toBeTruthy();
    });
  }));

  it('should return false for LO to edit name', inject([WorkflowEventsService], (service: WorkflowEventsService) => {
    let stubUser = new User();
    stubUser.roles = ['LO'];

    userserviceSpy.getUser.and.returnValue(of(stubUser));

    const path = ['taskedit', 'name']
    service.checkAuthorization(path).subscribe(actual => {
      expect(actual).toBeFalsy();
    });
  }));
});
