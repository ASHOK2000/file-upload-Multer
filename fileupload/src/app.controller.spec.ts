import { Test, TestingModule } from '@nestjs/testing';
import { FileController } from './app.controller';
import { AppService } from './config/aws-config.service';

describe('FileController', () => {
  let FileController: FileController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FileController],
      providers: [AppService],
    }).compile();

    FileController = app.get<FileController>(FileController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(FileController.getHello()).toBe('Hello World!');
    });
  });
});
