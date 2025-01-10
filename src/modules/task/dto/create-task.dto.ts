import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Task 1', description: 'The title of the task' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Description',
    description: 'The description of the task',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
