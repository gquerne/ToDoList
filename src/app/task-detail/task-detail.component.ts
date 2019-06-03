import {Component, OnInit, Input} from '@angular/core';

import {Task} from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task: Task;

  delete(id: number): void {
    this.taskService.deleteTask(id).subscribe();
  }

  constructor(private  taskService: TaskService) { }

  ngOnInit(): void { }

}
