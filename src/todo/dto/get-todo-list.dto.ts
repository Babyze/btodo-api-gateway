import { ApiProperty } from '@nestjs/swagger';
import { TodoDto } from './todo.dto';

export class GetTodoListResponseDTO {
  @ApiProperty({
    description: 'Todo list',
    type: [TodoDto],
  })
  todo: TodoDto[];
}
