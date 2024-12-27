import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Timestamp } from 'btodo-utils';
import Long from 'long';
import { map, Observable } from 'rxjs';
import { BaseResponse } from '../dto/response.dto';

@Injectable()
export class GrpcDataTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<BaseResponse> | Promise<Observable<BaseResponse>> {
    const response = context.switchToHttp().getResponse();
    response.status(HttpStatus.OK);

    return next.handle().pipe(
      map((data: any): BaseResponse => {
        return {
          statusCode: HttpStatus.OK,
          message: this.transformData(data),
        };
      }),
    );
  }

  private transformData(value: any) {
    if (Array.isArray(value)) {
      return value.map((item) => this.transformValue(item));
    }
    return this.transformValue(value);
  }

  private transformValue(value: any) {
    if (value && value.second) {
      return new Timestamp(value.second).toDate();
    }

    if (Long.isLong(value)) {
      return value.toNumber();
    }

    if (typeof value === 'object') {
      const transformed: any = {};
      for (const key of Object.keys(value)) {
        transformed[key] = this.transformValue(value[key]);
      }
      return transformed;
    }

    return value;
  }
}
