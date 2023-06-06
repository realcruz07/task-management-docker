import { TaskDto } from '../../dto/task.dto';
import { UpdateTaskDto } from '../../dto/update-task.dto';

export abstract class IUpdateTaskService {
  public abstract update(task: UpdateTaskDto): Promise<TaskDto>;
}
