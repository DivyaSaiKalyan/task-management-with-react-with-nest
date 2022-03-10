import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { Tasks } from './Entities/task.entiti';

class mokeTasksRepository {
  getStatus(task: string) {
    return {
      id: Date.now(),
      task,
      status: 0
    };
  }
  getTasks() {
    return [
      {
        id: Date.now(),
        task: 'task 1',
        status: 0
      }
    ];
  }

  addTask(task: string) {
    return Promise.resolve({
      id: 1,
      task,
      status: 0
    } as Tasks);
  }

  async changeStatus(tasks: string) {
    const getstatus = await this.getStatus(tasks);
    const { id, task, status } = getstatus;
    return Promise.resolve({
      id: 1,
      task: 'task 1',
      status
    } as Tasks);
  }
  changeAllLeft() {
    return Promise.resolve([
      {
        id: 1,
        task: 'task 1',
        status: 0
      }
    ]);
  }
}

describe('App Service', () => {
  let appService: AppService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: AppService,
      useClass: mokeTasksRepository
    };

    const appServiceTest: TestingModule = await Test.createTestingModule({
      providers: [ApiServiceProvider]
    }).compile();

    appService = appServiceTest.get<AppService>(AppService);
  });

  //This is used to service is define or not
  it('should be define', () => {
    expect(appService).toBeDefined();
  });

  //get all tasks test case
  it('get tasks method in app service', async () => {
    const result = [
      {
        id: expect.any(Number),
        task: 'task 1',
        status: 0
      }
    ];
    const tasks = await appService.getTasks();
    expect(tasks).toEqual(result);
  });

  //add task test case
  it('add task method in appservice', async () => {
    const addtask = await appService.addTask('task 1');
    expect(addtask).toEqual({
      id: 1,
      task: 'task 1',
      status: 0
    });
  });

  //change status testcase
  it('change status method in appservice', async () => {
    const getStatus = await appService.changeStatus('task 1');
    expect(getStatus).toEqual({
      id: 1,
      task: 'task 1',
      status: 0
    });
  });

  //change all to left
  it('changeAllLeft method in appService', async () => {
    const changeAllLeft = await appService.changeAllLeft();
    expect(changeAllLeft).toEqual([
      {
        id: 1,
        task: 'task 1',
        status: 0
      }
    ]);
  });
});
