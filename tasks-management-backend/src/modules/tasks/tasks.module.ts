import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth/auth.module';
import { TaskEntity } from './entities/task.entity';
import { TasksController } from './controllers/tasks.controller';

import { taskServices } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity]), AuthModule],
  controllers: [TasksController],
  providers: [...taskServices],
})
export class TasksModule {}
