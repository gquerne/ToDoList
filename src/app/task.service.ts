import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // private tasksUrl = 'http://strapi.bech.fr/tasks';
  private allTasksUrl = 'http://localhost:8080/tasks';
  private doneTasksUrl = 'http://localhost:8080/done';
  private addTaskUrl = 'http://localhost:8080/add';
  // private updateTaskUrl = 'http://localhost:8080/update';
  private deleteTaskUrl = 'http://localhost:8080/delete';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.allTasksUrl);
  }

  getDoneTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.doneTasksUrl);
  }

  addTask(task: Task): Observable<Task> {
    console.log('TaskTitle addTask: ' + task.title);
    return this.http.post<Task>(this.addTaskUrl, task);
  }

  // updateTask(task: Task): void {
  //   this.http.post<Task>(this.updateTaskUrl, task);
  // }

  deleteTask(id: number): Observable<{}> {
    const url = this.deleteTaskUrl + '/' + id;
    return this.http.delete(url);
  }

  constructor(private http: HttpClient) { }
}
