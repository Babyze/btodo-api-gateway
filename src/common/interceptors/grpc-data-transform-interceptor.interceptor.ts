import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
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
    const response = context.switchToHttp().getResponse();
    response.status(HttpStatus.OK);
    return next
      .handle()
      .pipe(map((data: any): BaseResponse => this.processResponse(data)));
  }

  private processResponse(data: any) {
    return {
      statusCode: HttpStatus.OK,
      message: transformgRPCToData(data),
    };
  }
}
