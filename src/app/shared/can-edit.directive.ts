import { Directive, OnDestroy, Input, ElementRef, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { WorkflowEventsService } from '../core/workflow-events.service';

@Directive({
  selector: '[CanEdit]'
})
export class CanEditDirective implements OnChanges, OnDestroy {
  @Input() CanEdit: string[];
  private permission$: Subscription;

  constructor(private el: ElementRef,
              private workflowEvents: WorkflowEventsService) {
  }

  ngOnChanges(): void {
    this.applyPermission();
  }

  private applyPermission(): void {
    this.permission$ = this.workflowEvents.checkAuthorization(this.CanEdit)
      .subscribe(authorized => {
        this.el.nativeElement.disabled = !authorized;
      });
  }

  ngOnDestroy(): void {
    this.permission$.unsubscribe();
  }
}
