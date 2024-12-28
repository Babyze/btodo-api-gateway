import {
  ACCOUNT_SERVICE_NAME,
  AccountServiceClient,
} from '@app/common/pb/account.pb';
import { AUTH_SERVICE_NAME, AuthServiceClient } from '@app/common/pb/auth.pb';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { httpCatchErrorOrDone } from 'btodo-utils';
import { FindAccountRequestDto } from './dto/find-account.dto';
import { SignInRequestDto } from './dto/sign-in.dto';
import { SignUpRequestDto, SignUpResponseDto } from './dto/sign-up.dto';
import { VerifyRequestDto, VerifyResponseDto } from './dto/verify.dto';

@Injectable()
export class AuthService {
  private accountServiceClient: AccountServiceClient;
  private authServiceClient: AuthServiceClient;

  constructor(
    @Inject(ACCOUNT_SERVICE_NAME)
    private readonly accountClient: ClientGrpc,

    @Inject(AUTH_SERVICE_NAME)
    private readonly authClient: ClientGrpc,
  ) {
    this.accountServiceClient =
      this.accountClient.getService<AccountServiceClient>(ACCOUNT_SERVICE_NAME);

    this.authServiceClient =
      this.authClient.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }

  async findAccount(payload: FindAccountRequestDto) {
    return httpCatchErrorOrDone(this.accountServiceClient.findAccount(payload));
  }

  async signUp(payload: SignUpRequestDto): Promise<SignUpResponseDto> {
    return httpCatchErrorOrDone(this.authServiceClient.signUp(payload));
  }

  async signIn(payload: SignInRequestDto): Promise<SignUpResponseDto> {
    return httpCatchErrorOrDone(this.authServiceClient.signIn(payload));
  }

  async verify(payload: VerifyRequestDto): Promise<VerifyResponseDto> {
    return httpCatchErrorOrDone(this.authServiceClient.verify(payload));
  }
}
