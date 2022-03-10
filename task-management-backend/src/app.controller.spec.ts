import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tasks } from './Entities/task.entiti';

describe('AppController', () => {
  let appController: AppController;
  //let fakeAppService: Partial<AppService>;

  const mockUserService = {
    addTask: (task: string) => {
      return Promise.resolve({
        id: 1,
        task,
        status: 0
      } as Tasks);
    },
    getTasks: () => {
      return Promise.resolve([
        {
          id: 1,
          task: 'task 1',
          status: 0
        } as Tasks
      ]);
    }
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    })
      .overrideProvider(AppService)
      .useValue(mockUserService)
      .compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController).toBeDefined();
    });
  });

  it('get task method in service', async () => {
    const tasks = await appController.getTasks();
    expect(tasks).toBeDefined();
  });
});
