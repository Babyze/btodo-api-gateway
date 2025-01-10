// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.0
//   protoc               v3.19.1
// source: auth.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "btodo.auth";

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  refreshToken: string;
  expireDate: number;
}

export interface SignUpRequest {
  email: string;
  password: string;
}

export interface SignUpResponse {
  accessToken: string;
  refreshToken: string;
  expireDate: number;
}

export interface SignOutRequest {
}

export interface SignOutResponse {
}

export interface VerifyRequest {
  accessToken: string;
}

export interface VerifyResponse {
  isValid: boolean;
  accountID?: number | undefined;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  expireDate: number;
}

export const BTODO_AUTH_PACKAGE_NAME = "btodo.auth";

export interface AuthServiceClient {
  signIn(request: SignInRequest): Observable<SignInResponse>;

  signUp(request: SignUpRequest): Observable<SignUpResponse>;

  signOut(request: SignOutRequest): Observable<SignOutResponse>;

  verify(request: VerifyRequest): Observable<VerifyResponse>;

  refreshToken(request: RefreshTokenRequest): Observable<RefreshTokenResponse>;
}

export interface AuthServiceController {
  signIn(request: SignInRequest): Promise<SignInResponse> | Observable<SignInResponse> | SignInResponse;

  signUp(request: SignUpRequest): Promise<SignUpResponse> | Observable<SignUpResponse> | SignUpResponse;

  signOut(request: SignOutRequest): Promise<SignOutResponse> | Observable<SignOutResponse> | SignOutResponse;

  verify(request: VerifyRequest): Promise<VerifyResponse> | Observable<VerifyResponse> | VerifyResponse;

  refreshToken(
    request: RefreshTokenRequest,
  ): Promise<RefreshTokenResponse> | Observable<RefreshTokenResponse> | RefreshTokenResponse;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["signIn", "signUp", "signOut", "verify", "refreshToken"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_SERVICE_NAME = "AuthService";
