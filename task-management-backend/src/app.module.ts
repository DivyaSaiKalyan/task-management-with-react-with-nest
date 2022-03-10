import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tasks } from './Entities/task.entiti';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'taskms',
      entities: [Tasks],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Tasks])
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
