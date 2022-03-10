import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('addtask/:task')
  async addTask(@Param('task') task: string) {
    return await this.appService.addTask(task);
  }

  @Get('gettasks')
  async getTasks() {
    return await this.appService.getTasks();
  }

  @Put('change/:status')
  async changeStatus(@Param('status') status: string) {
    return await this.appService.changeStatus(status);
  }

  @Put('changeright/:status')
  async changeStatusRightToLeft(@Param('status') status: string) {
    return await this.appService.changeStatusRightToLeft(status);
  }

  @Put('changeallleft')
  async changeAllLeft() {
    return await this.appService.changeAllLeft();
  }

  @Put('changeallright')
  async changeAllRight() {
    return await this.appService.changeAllRight();
  }
}
