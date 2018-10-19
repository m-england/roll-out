import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { environment } from '../environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowEventsService {
  private readonly WORKFLOW_EVENTS = environment['workflow'];
  private userRoles: Set<string>;

  constructor(private userService: UserService) {}

  public checkAuthorization(path: string[]): Observable<boolean> {
   if (!this.userRoles) {
      return this.userService.getUser()
        .pipe(
        map(currentUser => currentUser.role),
        tap(userRoles => {
          this.userRoles = new Set(userRoles);
        }),
        map(() => this.doCheckAuthorization(path))
        );
    }

    return of(this.doCheckAuthorization(path));
  }

  public doCheckAuthorization(path: string[]): boolean {
    if (path.length) {
      const entry = this.findEntry(this.WORKFLOW_EVENTS, path);
      if (entry && entry['permittedRoles'] && this.userRoles.size) {
        return entry.permittedRoles.some(permittedRole => this.userRoles.has(permittedRole));
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
