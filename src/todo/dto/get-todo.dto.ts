import { GetTodoRequest } from '@app/common/pb/todo.pb';
import { Transform } from 'class-transformer';
import { TodoDto } from './todo.dto';
import { IsNumber } from 'class-validator';

export class GetTodoRequestDto implements Pick<GetTodoRequest, 'todoID'> {
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  @IsNumber()
  todoID: number;
}

export class GetTodoResponseDto extends TodoDto {}
