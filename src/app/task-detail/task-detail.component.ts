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
  doYouWantToEdit = false;

  edit(): boolean {
    this.doYouWantToEdit = true;
    return this.doYouWantToEdit;
  }

  update(newTask: Task): void {
    this.doYouWantToEdit = false;
    this.taskService.updateTask(newTask).subscribe(() => this.updated.emit(this.tasks));
    this.taskService.getTasks().subscribe(tasks => this.tasks =  tasks);
  }

  delete(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => this.deleted.emit(this.tasks));
    this.taskService.getTasks().subscribe(tasks => this.tasks =  tasks);
  }

  constructor(private  taskService: TaskService) { }

  ngOnInit(): void { }

}
