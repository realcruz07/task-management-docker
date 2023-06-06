import { TaskDto } from './task.dto';

export class PaginatedTasks {
  public tasks: TaskDto[];
  public total: number;
  public page: number;
  public limit: number;
}
