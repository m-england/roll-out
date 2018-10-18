import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Task } from '../models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent implements OnChanges {
  @Input() task: Task;
  @Output() save = new EventEmitter<Task>();

  taskForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    description: ['']
  });

  constructor(private fb: FormBuilder, private taskService: TaskService) { }

  ngOnChanges() {
    this.taskForm.patchValue(this.task);   
  }

  onSubmit() {
    const savedTask = this.taskForm.value as Task;
    this.taskService.saveTask(savedTask);
    this.save.emit(savedTask);
  }
}
