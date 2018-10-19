import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskSubject = new ReplaySubject<Task[]>(1);
  private hasTasks: boolean = false;
  private currentTasks: Task[];

  constructor() { }

  public getTasks(): Observable<Task[]> {
    if (!this.hasTasks) {
      this.fetchTasks();
    }
    return this.taskSubject.asObservable();
  }

  private fetchTasks(): void {
    const task1 = new Task(1, 'Good', 'LO');
    const task2 = new Task(2, 'Bad', 'AM');
    const task3 = new Task(3, 'Okay', 'B');

    this.hasTasks = true;
    this.currentTasks = [task1, task2, task3];
    this.updateSubscribers();
  }

  saveTask(updatedTask: Task) {
    const index = this.currentTasks.findIndex(t => t.id === updatedTask.id);
    this.currentTasks[index] = updatedTask;
    this.updateSubscribers();
  }

  private updateSubscribers() {
    this.taskSubject.next(this.currentTasks);
  }
}
