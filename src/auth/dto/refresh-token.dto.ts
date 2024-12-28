import {
  RefreshTokenRequest,
  RefreshTokenResponse,
} from '@app/common/pb/auth.pb';
import { ApiProperty } from '@nestjs/swagger';
import { IsJWT } from 'class-validator';

export class RefreshTokenRequestDto implements RefreshTokenRequest {
  @IsJWT()
  refreshToken: string;
}

export class RefreshTokenResponseDto implements RefreshTokenResponse {
  @ApiProperty({
    description: 'Access token',
    type: 'string',
  })
  accessToken: string;

  @ApiProperty({
    description: 'Refresh token',
    type: 'string',
  })
  refreshToken: string;

  @ApiProperty({
    description: 'Access token expire date',
    type: 'number',
  })
  expireDate: number;
}
