import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TaskListComponent} from './task-list/task-list.component';
import { TaskDoneListComponent} from './task-done-list/task-done-list.component';

const routes: Routes = [
  { path: '', component: TaskListComponent},
  { path: 'tasks', component: TaskListComponent},
  { path: 'done', component: TaskDoneListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
