import { PaginationDto } from '../../../../shared/dto/pagination.dto';

import { PaginatedTasks } from '../../dto/paginated-tasks.dto';

export abstract class IFindAllTasksService {
  public abstract findAll(
    paginationData: PaginationDto,
  ): Promise<PaginatedTasks>;
}
