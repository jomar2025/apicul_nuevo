import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { TaskModule } from './task/task.module';
import { TaskCategoriesModule } from './task_categories/task_categories.module';
import { TaskStatusModule } from './task_status/task_status.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'apicul',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    TaskModule,
    TaskCategoriesModule,
    TaskStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
