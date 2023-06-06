import { ApiProperty } from '@nestjs/swagger';

import { TaskPriority } from '../enums/task-priority.enum';
import { UserDto } from '../../auth/dto/user.dto';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Task description',
    description: 'The description of the task',
  })
  public description: string;

  @ApiProperty({
    type: Date,
    example: '2023-06-30T00:00:00.000Z',
    description: 'The end date of the task',
  })
  public endDate: Date;

  @ApiProperty({
    enum: TaskPriority,
    example: TaskPriority.NORMAL,
    description: 'The priority of the task',
  })
  public priority: TaskPriority;

  @ApiProperty({
    type: Date,
    example: '2023-06-01T00:00:00.000Z',
    description: 'The start date of the task',
  })
  public startDate: Date;

  @ApiProperty({ example: 'Task title', description: 'The title of the task' })
  public title: string;

  @ApiProperty({
    example: 'User id',
    description: 'The user associated with the task',
    required: false,
  })
  public user?: UserDto;
}
