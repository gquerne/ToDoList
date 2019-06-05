import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  @Input() task: Task;
  @Input() tasks: Task[];
  @Output() added = new EventEmitter<Task[]>();

  add(title: string, description: string): void {
    const id = null;
    const isSelected = false;
    // tslint:disable-next-line:variable-name
    const done = false;
    this.taskService.addTask({title, description, id, isSelected, done} as Task)
      .subscribe(() => this.added.emit(this.tasks));
  }

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

}
