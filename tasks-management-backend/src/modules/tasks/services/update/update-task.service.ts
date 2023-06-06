import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import { IUpdateTaskService } from './update-task.interface';
import { TaskDto } from '../../dto/task.dto';
import { TaskEntity } from '../../entities/task.entity';
import { UpdateTaskDto } from '../../dto/update-task.dto';

export class UpdateTaskService implements IUpdateTaskService {
  public constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  public async update(task: UpdateTaskDto): Promise<TaskDto> {
    try {
      const updatedTask = await this.taskRepository.save(task);
      return plainToInstance(TaskDto, updatedTask);
    } catch (error) {
      throw error;
    }
  }
}
