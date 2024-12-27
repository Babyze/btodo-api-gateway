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
          },
        }),
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class ClientMicroserviceModule {}
