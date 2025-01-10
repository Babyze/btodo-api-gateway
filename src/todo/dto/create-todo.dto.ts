import { CreateTodoRequest } from '@app/common/pb/todo.pb';
import { IsString } from 'class-validator';
import { TodoDto } from './todo.dto';

export class CreateTodoRequestDTO implements Pick<CreateTodoRequest, 'name'> {
  @IsString()
  name: string;
}

export class CreateTodoResponseDto extends TodoDto {}
