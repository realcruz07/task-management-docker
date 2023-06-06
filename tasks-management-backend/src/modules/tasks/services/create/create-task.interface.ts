import { CreateTaskDto } from '../../dto/create-task.dto';
import { TaskDto } from '../../dto/task.dto';

export abstract class ICreateTaskService {
  public abstract create(task: CreateTaskDto): Promise<TaskDto>;
}
