import { Observable } from 'rxjs';

import { Task } from '../../models/task.interface';

export abstract class ITaskDetailsService {
  public abstract findOneTask(id: number): Observable<Task>;
}
