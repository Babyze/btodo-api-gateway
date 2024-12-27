import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GrpcDataTransformInterceptor } from './common/interceptor/grpc-data-transform-interceptor.interceptor';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new GrpcDataTransformInterceptor());

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
}
bootstrap();
