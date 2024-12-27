import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpRequestDto } from './dto/sign-up.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-up')
  signUp(@Body() payload: SignUpRequestDto) {
    return this.authService.signUp(payload);
  }
}
