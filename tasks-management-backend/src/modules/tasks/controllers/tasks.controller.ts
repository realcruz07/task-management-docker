import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Param,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

import { PaginationDto } from '../../../shared/dto/pagination.dto';

import { CreateTaskDto } from '../dto/create-task.dto';
import { ICreateTaskService } from '../services/create/create-task.interface';
import { IFindAllTasksService } from '../services/find-all/find-all-tasks.interface';
import { IFindOneTaskService } from '../services/find-one/find-one-task.interface';
import { IRemoveTasksService } from '../services/remove/remove-tasks.interface';
import { IUpdateTaskService } from '../services/update/update-task.interface';
import { PaginatedTasks } from '../dto/paginated-tasks.dto';
import { TaskDto } from '../dto/task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@ApiBearerAuth()
@ApiTags('tasks')
@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  public constructor(
    private readonly createTaskService: ICreateTaskService,
    private readonly findAllTasksService: IFindAllTasksService,
    private readonly findOneTaskService: IFindOneTaskService,
    private readonly removeTasksService: IRemoveTasksService,
    private readonly updateTaskService: IUpdateTaskService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public create(@Body() task: CreateTaskDto): Promise<TaskDto> {
    return this.createTaskService.create(task);
  }

  @Get()
  public findAll(
    @Query() paginationData: PaginationDto,
  ): Promise<PaginatedTasks> {
    return this.findAllTasksService.findAll(paginationData);
  }

  @Get(':id')
  public findOne(@Param('id') id: number): Promise<TaskDto> {
    return this.findOneTaskService.findOne(+id);
  }

  @Delete()
  public remove(@Body() ids: number[]): Promise<number[]> {
    return this.removeTasksService.remove(ids);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  public async update(@Body() task: UpdateTaskDto): Promise<TaskDto> {
    return this.updateTaskService.update(task);
  }
}
