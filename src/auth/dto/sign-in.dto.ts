import { SignInRequest, SignInResponse } from '@app/common/pb/auth.pb';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SignInRequestDto implements SignInRequest {
  @ApiProperty({
    description: 'Email address',
    type: 'string',
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password',
    type: 'string',
    required: true,
  })
  @IsString()
  password: string;
}

export class SignInResponseDto implements SignInResponse {
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
