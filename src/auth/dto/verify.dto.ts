import { VerifyRequest, VerifyResponse } from '@app/common/pb/auth.pb';

export class VerifyRequestDto implements VerifyRequest {
  accessToken: string;
}

export class VerifyResponseDto implements VerifyResponse {
  isValid: boolean;
}
