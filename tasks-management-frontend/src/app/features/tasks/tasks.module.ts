import { NgModule } from '@angular/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';

import { SharedModule } from '../../shared/shared.module';

import { AuthModule } from '../auth/auth.module';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskPriorityPipe } from './pipes/task-priority.pipe';
import { TaskRoutingModule } from './task-routing.module';
import { TaskStatusPipe } from './pipes/task-status.pipe';

import { taskService } from './services';

@NgModule({
  declarations: [
    TaskDetailsComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskPriorityPipe,
    TaskStatusPipe,
  ],
  imports: [
    AuthModule,
    NzDatePickerModule,
    NzDescriptionsModule,
    NzDrawerModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzMessageModule,
    NzSelectModule,
    NzTableModule,
    SharedModule,
    TaskRoutingModule,
  ],
  providers: [...taskService],
})
export class TasksModule {}
