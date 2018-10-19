import { Component, OnInit } from '@angular/core';
import { WorkflowEventsService } from 'src/app/core/workflow-events.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  public objectKeys = Object.keys;
  public workflow: any;
  public currentLevel: any;

  public breadCrumbs: string[] = ['root'];

  constructor(private workflowEvents: WorkflowEventsService) { }

  ngOnInit() {
    this.workflow = this.workflowEvents.getWorkflow();
    this.currentLevel = this.workflow;
  }

  setPath(path: string) {
    this.breadCrumbs.push(path);
    this.currentLevel = this.currentLevel[path];
  }
}
