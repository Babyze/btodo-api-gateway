import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as Joi from 'joi';
import { LoggerModule } from 'nestjs-pino';
import { AuthModule } from './auth/auth.module';
import { GrpcDataTransformInterceptor } from './common/interceptors/grpc-data-transform-interceptor.interceptor';
import { ClientMicroserviceModule } from './common/module/client-microservice-module.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        GRPC_ACCOUNT_HOST: Joi.string().required(),
        GRPC_ACCOUNT_PORT: Joi.number().required(),
        GRPC_ACCOUNT_PROTO_PATH: Joi.string().required(),
        GRPC_AUTH_HOST: Joi.string().required(),
        GRPC_AUTH_PORT: Joi.number().required(),
        GRPC_AUTH_PROTO_PATH: Joi.string().required(),
        GRPC_TODO_HOST: Joi.string().required(),
        GRPC_TODO_PORT: Joi.number().required(),
        GRPC_TODO_PROTO_PATH: Joi.string().required(),
      }),
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
        },
      },
    }),
    ClientMicroserviceModule,
    AuthModule,
    TodoModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: GrpcDataTransformInterceptor,
    },
  ],
})
export class AppModule {}
