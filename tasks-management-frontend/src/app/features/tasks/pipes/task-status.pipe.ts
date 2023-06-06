import { Pipe, PipeTransform } from '@angular/core';

import { TaskStatus, taskStatusArray } from '../enums/task-status.enum';

@Pipe({
  name: 'taskStatus',
})
export class TaskStatusPipe implements PipeTransform {
  public transform(value: TaskStatus): string {
    const status = taskStatusArray.find((item) => item.value === value);
    return status ? status.text : '';
  }
}
