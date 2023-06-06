import { ApiProperty } from '@nestjs/swagger';

import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends CreateTaskDto {
  @ApiProperty({ example: 1, description: 'The id of the task' })
  public id: number;
}
