import { Test, TestingModule } from '@nestjs/testing';
import { CreatestudentController } from './createstudent.controller';

describe('CreatestudentController', () => {
  let controller: CreatestudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreatestudentController],
    }).compile();

    controller = module.get<CreatestudentController>(CreatestudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
