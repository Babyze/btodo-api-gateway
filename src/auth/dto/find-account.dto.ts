import { FindAccountRequest } from '@app/common/pb/account.pb';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class FindAccountRequestDto implements FindAccountRequest {
  @IsNumber()
  accountID: number;

  @IsBoolean()
  @IsOptional()
  isDeleted?: boolean;
}
