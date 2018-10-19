import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowEventsService {
  private readonly WORKFLOW_EVENTS = environment['workflow'];
  private userRole: string;

  constructor(private userService: UserService) {}

  public checkAuthorization(path: string[]): Observable<boolean> {
   if (!this.userRole) {
      return this.userService.getUser()
        .pipe(
        map(currentUser => currentUser.role),
        tap(userRole => {
          this.userRole = userRole;
        }),
        map(() => this.doCheckAuthorization(path))
        );
    }

    return of(this.doCheckAuthorization(path));
  }

  public getWorkflow(): any {
    return this.WORKFLOW_EVENTS;
  }

  public doCheckAuthorization(path: string[]): boolean {
    if (path.length) {
      const entry = this.findEntry(this.WORKFLOW_EVENTS, path);
      if (entry && entry['permittedRoles'] && this.userRole) {
        const test = entry.permittedRoles.includes(this.userRole) || entry.permittedRoles.includes('all');
        return test;
      }
    }
    return false;
  }
/**
 * Recursively find workflow-map entry based on the path strings
 */
private findEntry(currentObject: any, keys: string[], index = 0) {
    const key = keys[index];
    if (currentObject[key] && index < keys.length - 1) {
      return this.findEntry(currentObject[key], keys, index + 1);
    } else if (currentObject[key] && index === keys.length - 1) {
      return currentObject[key];
    } else {
      return false;
    }
  }
}