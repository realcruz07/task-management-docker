import { Column, Entity, ManyToOne } from 'typeorm';
import { IsDateString, IsEnum, IsString } from 'class-validator';

import { BaseEntity } from '../../../shared/entities/base.entity';

import { TaskPriority } from '../enums/task-priority.enum';
import { TaskStatus } from '../enums/task-status.enum';
import { UserEntity } from '../../auth/entities/user.entity';

@Entity('tasks')
export class TaskEntity extends BaseEntity {
  @IsString()
  @Column('text')
  public description: string;

  @IsDateString()
  @Column('varchar')
  public endDate: Date;

  @IsEnum(TaskPriority)
  @Column({
    type: 'enum',
    enum: TaskPriority,
    default: TaskPriority.NORMAL,
  })
  public priority: TaskPriority;

  @IsDateString()
  @Column('varchar')
  public startDate: Date;

  @IsEnum(TaskStatus)
  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  public status: TaskStatus;

  @IsString()
  @Column('varchar')
  public title: string;

  @ManyToOne(() => UserEntity, { eager: true })
  public user?: UserEntity;
}
