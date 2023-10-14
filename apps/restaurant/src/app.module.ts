import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity, RecipieEntity } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      password: 'password',
      username: 'user',
      entities: [OrderEntity,RecipieEntity],
      database: 'restaurant',
      synchronize: true,
      logging: true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
