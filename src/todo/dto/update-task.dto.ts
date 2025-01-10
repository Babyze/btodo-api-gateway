import { TASK_STATUS } from '@app/common/constants/task.constant';
import { UpdateTaskRequest } from '@app/common/pb/todo.pb';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber } from 'class-validator';
import { TaskDto } from './task.dto';
import { Transform } from 'class-transformer';

export class UpdateTaskParamRequestDto
  implements Pick<UpdateTaskRequest, 'todoID' | 'taskID'>
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

export class UpdateTaskBodyRequestDto
  implements Pick<UpdateTaskRequest, 'status'>
{
  @ApiProperty({
    default: 'Task status',
    type: 'integer',
  })
  @IsEnum(TASK_STATUS)
  status: TASK_STATUS;
}

export class UpdateTaskResponseDto extends TaskDto {}
