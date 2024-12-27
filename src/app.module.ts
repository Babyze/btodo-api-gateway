import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ClientMicroserviceModule } from './common/module/client-microservice-module.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        GRPC_ACCOUNT_HOST: Joi.string().required(),
        GRPC_ACCOUNT_PORT: Joi.number().required(),
        GRPC_ACCOUNT_PROTO_PATH: Joi.string().required(),
        GRPC_AUTH_HOST: Joi.string().required(),
        GRPC_AUTH_PORT: Joi.number().required(),
        GRPC_AUTH_PROTO_PATH: Joi.string().required(),
      }),
    }),
    ClientMicroserviceModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
