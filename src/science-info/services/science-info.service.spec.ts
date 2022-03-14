import { Test, TestingModule } from '@nestjs/testing';
import { ScienceInfoService } from './science-info.service';

describe('ScienceInfoService', () => {
  let service: ScienceInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScienceInfoService],
    }).compile();

    service = module.get<ScienceInfoService>(ScienceInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
