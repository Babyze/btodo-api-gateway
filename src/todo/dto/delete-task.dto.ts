import { DeleteTaskRequest } from '@app/common/pb/todo.pb';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { TaskDto } from './task.dto';
import { Transform } from 'class-transformer';

export class DeleteTaskParamRequestDto
  implements Pick<DeleteTaskRequest, 'todoID' | 'taskID'>
{
  @ApiProperty({
    default: 'Task ID',
    type: 'integer',
  })
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  @IsNumber()
  taskID: number;

  @ApiProperty({
    default: 'Todo ID',
    type: 'integer',
  })
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  @IsNumber()
  todoID: number;
}

export class DeleteTaskResponseDto extends TaskDto {}
