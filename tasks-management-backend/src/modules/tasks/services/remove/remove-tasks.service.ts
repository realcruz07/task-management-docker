import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

import { IRemoveTasksService } from './remove-tasks.interface';
import { TaskEntity } from '../../entities/task.entity';

export class RemoveTasksService implements IRemoveTasksService {
  public constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  public async remove(ids: number[]): Promise<number[]> {
    const entities = await this.taskRepository.findBy({ id: In(ids) });

    if (entities.length === 0) {
      throw new NotFoundException('Tasks not found');
    }

    const idsToRemove = entities.map((entity) => entity.id);
    await this.taskRepository.delete(idsToRemove);
    return idsToRemove;
  }
}
