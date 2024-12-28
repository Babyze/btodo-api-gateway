import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { transformgRPCToData } from 'btodo-utils';
import { map, Observable } from 'rxjs';
import { BaseResponse } from '../dto/response.dto';

@Injectable()
export class GrpcDataTransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<BaseResponse> | Promise<Observable<BaseResponse>> {
    return next
      .handle()
      .pipe(
        map((data: any): BaseResponse => this.processResponse(context, data)),
      );
  }

  private processResponse(context: ExecutionContext, data: any) {
    const response = context.switchToHttp().getResponse();

    return {
      statusCode: response.statusCode,
      message: transformgRPCToData(data),
    };
  }
}
