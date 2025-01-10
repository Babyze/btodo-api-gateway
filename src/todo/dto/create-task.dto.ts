import { CreateTaskRequest } from '@app/common/pb/todo.pb';
import { IsNumber, IsString } from 'class-validator';
import { TaskDto } from './task.dto';
import { Transform } from 'class-transformer';

export class CreateTaskParamRequestDto
  implements Pick<CreateTaskRequest, 'todoID'>
{
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  @IsNumber()
  todoID: number;
}

export class CreateTaskBodyRequestDto
  implements Pick<CreateTaskRequest, 'name'>
{
  @IsString()
  name: string;
}

export class CreateTaskResponseDto extends TaskDto {}
