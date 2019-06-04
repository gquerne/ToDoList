import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import {TaskService } from '../task.service';

@Component({
  selector: 'app-task-done-list',
  templateUrl: './task-done-list.component.html',
  styleUrls: ['./task-done-list.component.css']
})
export class TaskDoneListComponent implements OnInit {

  tasks: Task[];
  task: Task = {
    title: '',
    description: '',
    id: 0,
    isSelected: false,
    done: true
  };

  getDoneTasks(): void {
    this.taskService.getDoneTasks().subscribe(tasks => this.tasks = tasks);
  }

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getDoneTasks();
  }

}
