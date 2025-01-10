// src/modules/task/task.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    console.log('user', user);
    const task = this.taskRepository.create({ ...createTaskDto, id: user.id });
    return this.taskRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: string): Promise<Task> {
    // Change id type to string
    return this.taskRepository.findOne({ where: { id } });
  }

  async updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    // Change id type to string
    await this.taskRepository.update(id, updateTaskDto);
    return this.findOne(id);
  }

  async deleteTask(id: string): Promise<void> {
    // Change id type to string
    await this.taskRepository.delete(id);
  }
}
