import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Task} from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task: Task;
  @Input() tasks: Task[];
  @Output() deleted = new EventEmitter<Task[]>();
  @Output() updated = new EventEmitter<Task[]>();

  update(task: Task): void {
    this.taskService.updateTask(task).subscribe();
    this.taskService.getTasks().subscribe(tasks => this.tasks =  tasks);
    this.updated.emit(this.tasks);
  }

  delete(id: number): void {
    this.taskService.deleteTask(id).subscribe();
    this.taskService.getTasks().subscribe(tasks => this.tasks =  tasks);
    this.deleted.emit(this.tasks);
  }

  constructor(private  taskService: TaskService) { }

  ngOnInit(): void { }

}
