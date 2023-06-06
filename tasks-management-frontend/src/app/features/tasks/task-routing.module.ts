import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../auth/guards/auth.guard';
import { TaskListComponent } from './pages/task-list/task-list.component';

const routes: Routes = [
  { path: '', component: TaskListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
