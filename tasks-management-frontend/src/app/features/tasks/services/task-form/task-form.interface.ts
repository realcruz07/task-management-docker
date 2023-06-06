import { Observable } from 'rxjs';

import { Task } from '../../models/task.interface';

export abstract class ITaskFormService {
  public abstract createTask(task: Partial<Task>): Observable<Task>;
  public abstract updateTask(task: Task): Observable<Task>;
}
