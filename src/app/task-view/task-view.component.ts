import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  @Input() task: Task;
  @Output() selected = new EventEmitter<Task>();
  @Output() done = new EventEmitter<Task>();

  onSelectView(task: Task): void {
    task.isSelected = true;
    this.selected.emit(task);
  }

  doneView(task: Task): void {
    // task.done = true;
    console.log('DoneView.title : ' + task.title + ', DoneView.isDone : ' + task.done);
    this.taskService.updateTask(task).subscribe(() => this.done.emit(task));
  }

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

}
