import { TaskDto } from '../../dto/task.dto';

export abstract class IFindOneTaskService {
  public abstract findOne(id: number): Promise<TaskDto>;
}
