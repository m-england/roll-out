import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  public selectedTask: Task;
  constructor() { }

  ngOnInit() {
  }

  selectTask(task: Task) {
    this.selectedTask = null;
    this.selectedTask = task;
  }

  onSave() {
    this.selectedTask = null;
  }
}
