import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { EnvService } from './common/env';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get<EnvService>(EnvService);
  const PORT = configService.get('PORT');
  await app.listen(PORT, () => {
    console.log('[main.ts]  -  App is running on port ', PORT);
  });
}
bootstrap();
