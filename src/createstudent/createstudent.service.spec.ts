import { Test, TestingModule } from '@nestjs/testing';
import { CreatestudentService } from './createstudent.service';

describe('CreatestudentService', () => {
  let service: CreatestudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatestudentService],
    }).compile();

    service = module.get<CreatestudentService>(CreatestudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
