import { JwtAuthGuard } from '@app/auth/guards/jwt-auth.guard';
import { CurrentUser } from '@app/common/decorators/current-user.decorator';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CurrentUserType } from '../common/decorators/current-user.decorator';
import {
  CreateTaskBodyRequestDto,
  CreateTaskParamRequestDto,
} from './dto/create-task.dto';
import { CreateTodoRequestDTO } from './dto/create-todo.dto';
import { DeleteTaskParamRequestDto } from './dto/delete-task.dto';
import { DeleteTodoRequestDto } from './dto/delete-todo.dto';
import { GetTaskListParamRequestDto } from './dto/get-task-list.dto';
import { GetTodoRequestDto } from './dto/get-todo.dto';
import {
  UpdateTaskBodyRequestDto,
  UpdateTaskParamRequestDto,
} from './dto/update-task.dto';
import { TodoService } from './todo.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(
    @CurrentUser() currentUser: CurrentUserType,
    @Body() payload: CreateTodoRequestDTO,
  ) {
    return this.todoService.createTodo(currentUser.accountID, payload);
  }

  @Get()
  getTodoList(@CurrentUser() currentUser: CurrentUserType) {
    return this.todoService.getTodoList(currentUser.accountID);
  }

  @Get(':todoID')
  getTodo(
    @CurrentUser() currentUser: CurrentUserType,
    @Param() params: GetTodoRequestDto,
  ) {
    return this.todoService.getTodo(currentUser.accountID, params);
  }

  @Delete(':todoID')
  deleteTodo(
    @CurrentUser() currentUser: CurrentUserType,
    @Param() params: DeleteTodoRequestDto,
  ) {
    return this.todoService.deleteTodo(currentUser.accountID, params);
  }

  @Post(':todoID/tasks')
  createTask(
    @CurrentUser() currentUser: CurrentUserType,
    @Param() params: CreateTaskParamRequestDto,
    @Body() payload: CreateTaskBodyRequestDto,
  ) {
    return this.todoService.createTask(currentUser.accountID, params, payload);
  }

  @Get(':todoID/tasks')
  getTaskList(
    @CurrentUser() currentUser: CurrentUserType,
    @Param() params: GetTaskListParamRequestDto,
  ) {
    return this.todoService.getTaskList(currentUser.accountID, params);
  }

  @Put(':todoID/tasks/:taskID')
  updateTask(
    @CurrentUser() currentUser: CurrentUserType,
    @Param() params: UpdateTaskParamRequestDto,
    @Body() payload: UpdateTaskBodyRequestDto,
  ) {
    return this.todoService.updateTask(currentUser.accountID, params, payload);
  }

  @Delete(':todoID/tasks/:taskID')
  deleteTask(
    @CurrentUser() currentUser: CurrentUserType,
    @Param() params: DeleteTaskParamRequestDto,
  ) {
    return this.todoService.deleteTask(currentUser.accountID, params);
  }
}
