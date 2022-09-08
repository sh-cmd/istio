import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WrapperModule } from './wrapper/wrapper.module';

@Module({
  imports: [WrapperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
