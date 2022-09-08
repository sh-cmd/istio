
import { Module } from '@nestjs/common';

import { CustomHttpService } from './httpService';

@Module({
  imports: [],
  providers: [CustomHttpService,],
  exports: [CustomHttpService,]
})
export class CustomHttpModule {}
