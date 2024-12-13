import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { EnvService } from './common/env';
import { Logger, PinoLogger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true, // pino logger
  });

  // middlewares
  const logger = app.get(Logger);
  app.useLogger(logger); // Logger from pino

  const configService = app.get<EnvService>(EnvService);
  const PORT = configService.get('PORT');
  await app.listen(PORT, () => {
    logger.log('[main.ts]  -  App is running on port ', PORT);
  });
}
bootstrap();
