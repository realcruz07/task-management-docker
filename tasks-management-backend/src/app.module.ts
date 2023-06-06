import { Module } from '@nestjs/common';

import { DatabaseModule } from './core/database/database.module';

import { AuthModule } from './modules/auth/auth.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [DatabaseModule, TasksModule, AuthModule],
})
export class AppModule {}
