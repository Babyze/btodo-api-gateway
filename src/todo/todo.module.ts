import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { AuthModule } from '@app/auth/auth.module';

@Module({
  imports: [ClientsModule, AuthModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
