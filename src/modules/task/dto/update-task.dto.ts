import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @ApiProperty({ example: 'Task 1', description: 'The title of the task' })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({
    example: 'Description',
    description: 'The description of the task',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 'pending', description: 'The status of the task' })
  @IsString()
  @IsOptional()
  status?: string;
}
