import { TaskPriority } from '../enums/task-priority.enum';
import { TaskStatus } from '../enums/task-status.enum';
import { User } from '../../auth/models/user.interface';

export interface Task {
  createdAt: Date;
  deletedAt: Date;
  description: string;
  endDate: Date;
  id: number;
  priority: TaskPriority;
  startDate: Date;
  status: TaskStatus;
  title: string;
  updatedAt: Date;
  user: User;
}
