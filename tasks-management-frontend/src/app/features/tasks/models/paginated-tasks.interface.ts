import { Task } from './task.interface';

export interface PaginatedTasks {
  tasks: Task[];
  total: number;
  page: number;
  limit: number;
}
