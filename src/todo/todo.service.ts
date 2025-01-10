import { TODO_SERVICE_NAME, TodoServiceClient } from '@app/common/pb/todo.pb';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { httpCatchErrorOrDone } from 'btodo-utils';
import {
  CreateTaskBodyRequestDto,
  CreateTaskParamRequestDto,
  CreateTaskResponseDto,
} from './dto/create-task.dto';
import {
  CreateTodoRequestDTO,
  CreateTodoResponseDto,
} from './dto/create-todo.dto';
import { DeleteTodoResponseDto } from './dto/delete-todo.dto';
import {
  GetTaskListParamRequestDto,
  GetTaskListResponseDto,
} from './dto/get-task-list.dto';
import { GetTodoListResponseDTO } from './dto/get-todo-list.dto';
import { GetTodoRequestDto, GetTodoResponseDto } from './dto/get-todo.dto';
import {
  UpdateTaskBodyRequestDto,
  UpdateTaskParamRequestDto,
  UpdateTaskResponseDto,
} from './dto/update-task.dto';
import {
  DeleteTaskParamRequestDto,
  DeleteTaskResponseDto,
} from './dto/delete-task.dto';

@Injectable()
export class TodoService {
  private todoServiceClient: TodoServiceClient;

  constructor(
    @Inject(TODO_SERVICE_NAME)
    private readonly todoClient: ClientGrpc,
  ) {
    this.todoServiceClient =
      this.todoClient.getService<TodoServiceClient>(TODO_SERVICE_NAME);
  }

  async createTodo(
    accountID: number,
    payload: CreateTodoRequestDTO,
  ): Promise<CreateTodoResponseDto> {
    return httpCatchErrorOrDone(
      this.todoServiceClient.createTodo({
        accountID,
        ...payload,
      }),
    );
  }

  async getTodoList(accountID: number): Promise<GetTodoListResponseDTO> {
    return httpCatchErrorOrDone(
      this.todoServiceClient.getTodoList({
        accountID,
      }),
    );
  }

  async getTodo(
    accountID: number,
    payload: GetTodoRequestDto,
  ): Promise<GetTodoResponseDto> {
    return httpCatchErrorOrDone(
      this.todoServiceClient.getTodo({
        accountID,
        todoID: payload.todoID,
      }),
    );
  }

  async deleteTodo(
    accountID: number,
    payload: GetTodoRequestDto,
  ): Promise<DeleteTodoResponseDto> {
    return httpCatchErrorOrDone(
      this.todoServiceClient.deleteTodo({
        accountID,
        todoID: payload.todoID,
      }),
    );
  }

  async createTask(
    accountID: number,
    params: CreateTaskParamRequestDto,
    payload: CreateTaskBodyRequestDto,
  ): Promise<CreateTaskResponseDto> {
    return httpCatchErrorOrDone(
      this.todoServiceClient.createTask({
        accountID,
        todoID: params.todoID,
        name: payload.name,
      }),
    );
  }

  async getTaskList(
    accountID: number,
    params: GetTaskListParamRequestDto,
  ): Promise<GetTaskListResponseDto> {
    return httpCatchErrorOrDone(
      this.todoServiceClient.getTaskList({
        accountID,
        todoID: params.todoID,
      }),
    );
  }

  async updateTask(
    accountID: number,
    params: UpdateTaskParamRequestDto,
    payload: UpdateTaskBodyRequestDto,
  ): Promise<UpdateTaskResponseDto> {
    return httpCatchErrorOrDone(
      this.todoServiceClient.updateTask({
        accountID,
        ...params,
        ...payload,
      }),
    );
  }

  async deleteTask(
    accountID: number,
    params: DeleteTaskParamRequestDto,
  ): Promise<DeleteTaskResponseDto> {
    return httpCatchErrorOrDone(
      this.todoServiceClient.deleteTask({
        accountID,
        ...params,
      }),
    );
  }
}
