import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Tasks } from './Entities/task.entiti';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Tasks) private readonly taskRepository: Repository<Tasks>
  ) {}

  async addTask(task: string): Promise<Tasks> {
    const newtask = new Tasks();
    newtask.task = task;
    newtask.status = 1;
    try {
      return await this.taskRepository.save(newtask);
    } catch (error) {
      return error;
    }
  }

  async getTasks(): Promise<Tasks[]> {
    try {
      return await this.taskRepository.find();
    } catch (error) {
      return error;
    }
  }

  async changeStatus(status: string) {
    try {
      const getone = await this.taskRepository.findOne({ task: status });
      if (!getone) {
        throw new NotFoundException('details not found');
      }

      return await this.taskRepository.update(
        { task: getone.task },
        { status: 0 }
      );
    } catch (error) {
      return error;
    }
  }

  async changeStatusRightToLeft(status: string) {
    const getone = await this.taskRepository.findOne({ task: status });
    if (!getone) {
      throw new NotFoundException('details not found');
    }
    return await this.taskRepository.update(
      { task: getone.task },
      { status: 1 }
    );
  }

  async changeAllLeft() {
    const change = await getManager().query(
      'UPDATE tasks SET status = 1 where status=0'
    );
    return change;
  }

  async changeAllRight() {
    const change = await getManager().query(
      'UPDATE tasks SET status = 0 where status=1'
    );
    return change;
  }
}
