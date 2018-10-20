import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkflowEventsService } from 'src/app/core/workflow-events.service';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  public editorOptions: JsonEditorOptions;
  public workflow: any;
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  constructor(private workflowEvents: WorkflowEventsService) { }

  ngOnInit() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'tree';
    this.editorOptions.modes = ['code', 'tree'];
    this.workflow = this.workflowEvents.getWorkflow();
  }

  print() {
    console.log(this.workflow);
  }

  save() {
    this.workflow = this.editor.get();
    this.workflowEvents.setWorkflow(this.workflow);
  }
}
