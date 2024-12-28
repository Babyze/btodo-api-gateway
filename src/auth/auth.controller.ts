import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInRequestDto, SignInResponseDto } from './dto/sign-in.dto';
import { SignUpRequestDto, SignUpResponseDto } from './dto/sign-up.dto';

@ApiTags('Authentication')
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-up')
  signUp(@Body() payload: SignUpRequestDto): Promise<SignUpResponseDto> {
    return this.authService.signUp(payload);
  }

  @Post('/sign-in')
  signIn(@Body() payload: SignInRequestDto): Promise<SignInResponseDto> {
    return this.authService.signIn(payload);
  }
}
