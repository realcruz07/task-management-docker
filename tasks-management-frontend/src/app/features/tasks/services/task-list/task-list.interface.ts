import { Observable } from 'rxjs';

import { PaginationData } from '../../../../shared/models/pagination.interface';

import { PaginatedTasks } from '../../models/paginated-tasks.interface';

export abstract class ITaskListService {
  public abstract findAllTasks(
    paginationData: PaginationData,
  ): Observable<PaginatedTasks>;
  public abstract removeTasks(ids: number[]): Observable<number[]>;
}
