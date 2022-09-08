import { Test, TestingModule } from '@nestjs/testing';
import { WrapperController } from './wrapper.controller';

describe('WrapperController', () => {
  let controller: WrapperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WrapperController],
    }).compile();

    controller = module.get<WrapperController>(WrapperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
