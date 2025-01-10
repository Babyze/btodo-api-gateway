import { DeleteTodoRequest } from '@app/common/pb/todo.pb';
import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { TodoDto } from './todo.dto';

export class DeleteTodoRequestDto implements Pick<DeleteTodoRequest, 'todoID'> {
  @IsNumber()
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  todoID: number;
}

export class DeleteTodoResponseDto extends TodoDto {}
