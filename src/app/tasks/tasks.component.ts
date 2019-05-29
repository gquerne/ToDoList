import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService} from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks: Task[];

  task: Task = {
    Title: '',
    description: '',
    id: 0,
    isSelected: false,
    isHidden: false
  };

  selectedTask: Task;

  onSelect(task: Task): void {
    console.log(task);
    task.isSelected = true;
    this.selectedTask = task;
  }

  hide(task: Task): void {
    console.log(task);
    task.isSelected = false;
    this.selectedTask = null;
    task.isHidden = true;
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  constructor(private taskService: TaskService) {  }

  ngOnInit() {
    this.getTasks();
  }

}
