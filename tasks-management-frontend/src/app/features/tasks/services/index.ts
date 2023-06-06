import { Provider } from '@angular/core';

import { ITaskDetailsService } from './task-details/task-details.interface';
import { ITaskFormService } from './task-form/task-form.interface';
import { ITaskListService } from './task-list/task-list.interface';
import { TaskDetailsService } from './task-details/task-details.service';
import { TaskFormService } from './task-form/task-form.service';
import { TaskListService } from './task-list/task-list.service';

export const taskService: Provider[] = [
  {
    provide: ITaskDetailsService,
    useClass: TaskDetailsService,
  },
  {
    provide: ITaskFormService,
    useClass: TaskFormService,
  },
  {
    provide: ITaskListService,
    useClass: TaskListService,
  },
];
