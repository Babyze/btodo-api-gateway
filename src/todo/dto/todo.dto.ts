import { TODO_STATUS } from '@app/common/constants/todo.constant';
import { Todo } from '@app/common/pb/todo.pb';
import { Timestamp } from '@app/common/pb/utils.pb';
import { ApiProperty } from '@nestjs/swagger';

export class TodoDto implements Todo {
  @ApiProperty({
    description: 'Todo ID',
    type: 'number',
  })
  todoID: number;

  @ApiProperty({
    description: 'Todo name',
    type: 'string',
  })
  todoName: string;

  @ApiProperty({
    description: 'Todo status',
    type: 'number',
  })
  status: TODO_STATUS;

  @ApiProperty({
    description: 'Todo created date',
    type: 'string',
  })
  createdAt: Timestamp;

  @ApiProperty({
    description: 'Todo created date',
    type: 'string',
  })
  updatedAt: Timestamp;
}
