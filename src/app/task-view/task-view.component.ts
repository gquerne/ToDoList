import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task } from '../task';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  @Input() task: Task;
  @Output() selected = new EventEmitter<Task>();

  onSelectView(task: Task): void {
    task.isSelected = true;
    this.selected.emit(task);
  }

  hide(task: Task): void {
    task.isSelected = false;
    this.selected.emit(task);
    task.isHidden = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
