import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { WorkflowEventsService } from '../core/workflow-events.service';

@Directive({
  selector: '[CanView]'
})
export class CanViewDirective implements OnInit, OnDestroy {
  @Input('CanView') CanView: string[];
  private permission$: Subscription;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private workflowEvents: WorkflowEventsService) {
  }

  ngOnInit(): void {
    this.applyPermission();
  }

  private applyPermission(): void {
    this.permission$ = this.workflowEvents.checkAuthorization(this.CanView)
      .subscribe(authorized => {
        this.viewContainer.clear();
        if (authorized) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      });
  }

  ngOnDestroy(): void {
    this.permission$.unsubscribe();
  }
}
