import {
  GetTaskListRequest,
  GetTaskListResponse,
} from '@app/common/pb/todo.pb';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { TaskDto } from './task.dto';

export class GetTaskListParamRequestDto
  implements Pick<GetTaskListRequest, 'todoID'>
{
  @ApiProperty({
    description: 'Todo ID',
    type: 'number',
  })
  @IsNumber()
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  todoID: number;
}

export class GetTaskListResponseDto
  implements Omit<GetTaskListResponse, 'tasks'>
{
  @ApiProperty({
    description: 'Todo list',
    type: [TaskDto],
  })
  tasks: TaskDto[];
}
