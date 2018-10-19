import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/core/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Output() select = new EventEmitter<Task>();

  public tasks: Observable<Task[]>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  selectTask(task: Task) {
    this.select.emit(task);
  }
}
