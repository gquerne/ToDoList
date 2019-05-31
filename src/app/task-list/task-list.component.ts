import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import { Task } from '../task';
import { TaskService} from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  task: Task = {
    title: '',
    description: '',
    id: 0,
    isSelected: false,
    is_done: false
  };

  selected: Task;
  hidden: Task;

  onSelectList(task: Task): Task {
    task.isSelected = true;
    this.selected = task;
    return this.selected;
  }

  doneList(task: Task): void {
    task.isSelected = false;
    task.is_done = true;
    this.hidden = task;
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  constructor(private taskService: TaskService) {  }

  ngOnInit() {
    this.getTasks();
  }
}
