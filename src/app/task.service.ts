import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = 'http://strapi.bech.fr/tasks';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  constructor(private http: HttpClient) { }
}
