import { SignUpRequest, SignUpResponse } from '@app/common/pb/auth.pb';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SignUpRequestDto implements SignUpRequest {
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

export class SignUpResponseDto implements SignUpResponse {
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
