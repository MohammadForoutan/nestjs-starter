import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EnvModule } from './common/env';
import { LoggerModule } from './common/logger';

@Module({
  imports: [EnvModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
