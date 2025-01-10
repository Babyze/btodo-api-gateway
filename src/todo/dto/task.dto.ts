import { TASK_STATUS } from '@app/common/constants/task.constant';
import { Task } from '@app/common/pb/todo.pb';
import { ApiProperty } from '@nestjs/swagger';
import { Timestamp } from '@app/common/pb/utils.pb';

export class TaskDto implements Task {
  @ApiProperty({
    description: 'Task ID',
    type: 'number',
  })
  taskID: number;

  @ApiProperty({
    description: 'Task name',
    type: 'string',
  })
  taskName: string;

  @ApiProperty({
    description: 'Task status',
    type: 'number',
  })
  status: TASK_STATUS;

  @ApiProperty({
    description: 'Task created date',
    type: 'string',
  })
  createdAt: Timestamp;

  @ApiProperty({
    description: 'Task created date',
    type: 'string',
  })
  updatedAt: Timestamp;
}
