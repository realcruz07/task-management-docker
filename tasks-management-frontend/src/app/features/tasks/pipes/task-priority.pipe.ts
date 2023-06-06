import { Pipe, PipeTransform } from '@angular/core';

import { TaskPriority, taskPriorityArray } from '../enums/task-priority.enum';

@Pipe({
  name: 'taskPriority',
})
export class TaskPriorityPipe implements PipeTransform {
  public transform(value: TaskPriority): string {
    const priority = taskPriorityArray.find((item) => item.value === value);
    return priority ? priority.text : '';
  }
}
