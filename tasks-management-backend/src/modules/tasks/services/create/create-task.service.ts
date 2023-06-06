import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import { CreateTaskDto } from '../../dto/create-task.dto';
import { ICreateTaskService } from './create-task.interface';
import { TaskDto } from '../../dto/task.dto';
import { TaskEntity } from '../../entities/task.entity';

@Injectable()
export class CreateTaskService implements ICreateTaskService {
  public constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  public async create(task: CreateTaskDto): Promise<TaskDto> {
    try {
      const newTask = await this.taskRepository.save(task);
      const entity = await this.taskRepository.findOneBy({ id: newTask.id });
      return plainToInstance(TaskDto, entity);
    } catch (error) {
      throw error;
    }
  }
}
