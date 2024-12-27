import { SignUpRequest } from '@app/common/pb/auth.pb';
import { IsEmail, IsString } from 'class-validator';

export class SignUpRequestDto implements SignUpRequest {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
