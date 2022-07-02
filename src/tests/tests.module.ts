import {  Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';

@Module({
  controllers: [TestsController],
  providers: [TestsService],
  
    imports: [
      HttpModule.register({
        timeout: 5000,
        maxRedirects: 5,
      }),
    ],
   
  })
  

export class TestsModule {}
