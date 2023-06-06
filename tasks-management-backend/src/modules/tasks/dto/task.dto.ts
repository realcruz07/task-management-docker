import { TaskPriority } from '../enums/task-priority.enum';
import { TaskStatus } from '../enums/task-status.enum';
import { UserDto } from '../../auth/dto/user.dto';

export class TaskDto {
  public createdAt: Date;
  public deletedAt: Date;
  public description: string;
  public endDate: Date;
  public id: number;
  public priority: TaskPriority;
  public startDate: Date;
  public status: TaskStatus;
  public title: string;
  public updatedAt: Date;
  public user: UserDto;
}
