import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import {
  ACCOUNT_SERVICE_NAME,
  BTODO_ACCOUNT_PACKAGE_NAME,
} from '@app/common/pb/account.pb';
import {
  AUTH_SERVICE_NAME,
  BTODO_AUTH_PACKAGE_NAME,
} from '@app/common/pb/auth.pb';
import { BTODO_TODO_PACKAGE_NAME, TODO_SERVICE_NAME } from '../pb/todo.pb';

@Global()
@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: ACCOUNT_SERVICE_NAME,
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          name: ACCOUNT_SERVICE_NAME,
          transport: Transport.GRPC,
          options: {
            url: `${configService.get('GRPC_ACCOUNT_HOST')}:${configService.get('GRPC_ACCOUNT_PORT')}`,
            package: BTODO_ACCOUNT_PACKAGE_NAME,
            protoPath: [configService.get('GRPC_ACCOUNT_PROTO_PATH')],
            loader: {
              arrays: true,
            },
          },
        }),
      },

      {
        name: AUTH_SERVICE_NAME,
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          name: AUTH_SERVICE_NAME,
          transport: Transport.GRPC,
          options: {
            url: `${configService.get('GRPC_AUTH_HOST')}:${configService.get('GRPC_AUTH_PORT')}`,
            package: BTODO_AUTH_PACKAGE_NAME,
            protoPath: [configService.get('GRPC_AUTH_PROTO_PATH')],
            loader: {
              arrays: true,
            },
          },
        }),
      },

      {
        name: TODO_SERVICE_NAME,
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          name: AUTH_SERVICE_NAME,
          transport: Transport.GRPC,
          options: {
            url: `${configService.get('GRPC_TODO_HOST')}:${configService.get('GRPC_TODO_PORT')}`,
            package: BTODO_TODO_PACKAGE_NAME,
            protoPath: [configService.get('GRPC_TODO_PROTO_PATH')],
            loader: {
              arrays: true,
            },
          },
        }),
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class ClientMicroserviceModule {}
