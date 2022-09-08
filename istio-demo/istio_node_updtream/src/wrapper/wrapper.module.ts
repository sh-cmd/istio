import { Module } from '@nestjs/common';
import { WrapperService } from './wrapper.service';
import { WrapperController } from './wrapper.controller';
import {CustomHttpModule} from '../http/http.module'

@Module({
  imports:[CustomHttpModule,],
  providers: [WrapperService],
  controllers: [WrapperController]
})
export class WrapperModule {}
