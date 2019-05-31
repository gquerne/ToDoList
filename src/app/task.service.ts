import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // private tasksUrl = 'http://strapi.bech.fr/tasks';
  private allTasksUrl = 'http://localhost:8080/tasks';
  private doneTaskUrl = 'http://localhost:8080/done';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.allTasksUrl);
  }

  getDoneTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.doneTaskUrl);
  }

  constructor(private http: HttpClient) { }
}
