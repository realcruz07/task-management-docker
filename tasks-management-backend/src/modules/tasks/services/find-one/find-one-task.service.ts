import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import { IFindOneTaskService } from './find-one-task.interface';
import { TaskDto } from '../../dto/task.dto';
import { TaskEntity } from '../../entities/task.entity';

export class FindOneTaskService implements IFindOneTaskService {
  public constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  public async findOne(id: number): Promise<TaskDto> {
    const entity = await this.taskRepository.findOneBy({ id });

    if (!entity) {
      throw new NotFoundException('Task not found');
    }

    return plainToInstance(TaskDto, entity);
  }
}
