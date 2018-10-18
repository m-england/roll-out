import { Directive, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { WorkflowEventsService } from './workflow-events.service';

@Directive({
  selector: '[CanAccess]'
})
export class CanAccessDirective implements OnInit, OnDestroy {
  private _canAccess: string[]; 

  @Input('CanAccess')
  set appCanAccess(value: string) {
    this._canAccess = JSON.parse(value);
  }

  private permission$: Subscription;

  constructor(private el: ElementRef,
              private workflowEvents: WorkflowEventsService) {
  }

  ngOnInit(): void {
    this.applyPermission();
  }

  private applyPermission(): void {
    this.permission$ = this.workflowEvents.checkAuthorization(this._canAccess)
      .subscribe(authorized => {
        this.el.nativeElement.disabled = authorized;
      });
  }

  ngOnDestroy(): void {
    this.permission$.unsubscribe();
  }
}
