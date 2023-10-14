import { NestFactory } from '@nestjs/core';
import { KitchenModule } from './kitchen.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    KitchenModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://user:password@rabbitmq:5672'],
        queue: 'kitchen_queue',
        queueOptions: {
          durable: true,
        },
      },

    },

  );
  app.listen();
}
bootstrap();
