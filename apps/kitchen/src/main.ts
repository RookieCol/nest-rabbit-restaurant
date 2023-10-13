import { NestFactory } from '@nestjs/core';
import { KitchenModule } from './kitchen.module';

async function bootstrap() {
  const app = await NestFactory.create(KitchenModule);
  await app.listen(6000);
}
bootstrap();
