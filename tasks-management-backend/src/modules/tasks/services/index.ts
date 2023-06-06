import { Provider } from '@nestjs/common';

import { CreateTaskService } from './create/create-task.service';
import { FindAllTasksService } from './find-all/find-all-tasks.service';
import { FindOneTaskService } from './find-one/find-one-task.service';
import { ICreateTaskService } from './create/create-task.interface';
import { IFindAllTasksService } from './find-all/find-all-tasks.interface';
import { IFindOneTaskService } from './find-one/find-one-task.interface';
import { IRemoveTasksService } from './remove/remove-tasks.interface';
import { IUpdateTaskService } from './update/update-task.interface';
import { RemoveTasksService } from './remove/remove-tasks.service';
import { UpdateTaskService } from './update/update-task.service';

export const taskServices: Provider[] = [
  {
    provide: ICreateTaskService,
    useClass: CreateTaskService,
  },
  {
    provide: IFindAllTasksService,
    useClass: FindAllTasksService,
  },
  {
    provide: IFindOneTaskService,
    useClass: FindOneTaskService,
  },
  {
    provide: IRemoveTasksService,
    useClass: RemoveTasksService,
  },
  {
    provide: IUpdateTaskService,
    useClass: UpdateTaskService,
  },
];
