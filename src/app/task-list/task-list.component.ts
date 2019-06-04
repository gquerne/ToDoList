import {Component, OnInit} from '@angular/core';
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
    done: false
  };

  selected: Task;

  onSelectList(task: Task): Task {
    this.selected = task;
    return this.selected;
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  constructor(private taskService: TaskService) {  }

  ngOnInit() {
    this.getTasks();
  }
}
