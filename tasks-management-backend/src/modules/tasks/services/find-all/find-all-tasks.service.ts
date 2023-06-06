import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { FindManyOptions, Repository } from 'typeorm';

import { IFindAllTasksService } from './find-all-tasks.interface';
import { PaginatedTasks } from '../../dto/paginated-tasks.dto';
import { TaskDto } from '../../dto/task.dto';
import { TaskEntity } from '../../entities/task.entity';
import { PaginationDto } from '../../../../shared/dto/pagination.dto';

export class FindAllTasksService implements IFindAllTasksService {
  public constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  public async findAll({
    page,
    limit,
    filter,
  }: PaginationDto): Promise<PaginatedTasks> {
    const findManyOptions: FindManyOptions = {
      skip: (page - 1) * limit,
      take: limit,
    };

    if (filter) {
      const { key, value } = JSON.parse(filter as unknown as string);
      findManyOptions.where = {
        [key]: value,
      };
    }

    const [tasks, total] = await this.taskRepository.findAndCount(
      findManyOptions,
    );

    return {
      tasks: plainToInstance(TaskDto, tasks),
      total,
      page,
      limit,
    };
  }
}
