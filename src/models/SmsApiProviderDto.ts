import { ApiRequestOptions, ApiRequestBodyOptions, ApiResponseBase } from '../types/CoreTypes';

export interface SmsRequestDTO  extends ApiRequestBodyOptions {
  to: string[];
  msg: string;
}
export interface getSmsStatusRequestDTO  extends ApiRequestBodyOptions {
  phone: string;
  ip: string;
}


export interface SmsRequest extends ApiRequestOptions {
  body: SmsRequestDTO;
}
export interface getSmsStatusRequest extends ApiRequestOptions {
  body: getSmsStatusRequestDTO;
}

export class SmsResponse extends ApiResponseBase {
  balance: number;
}
export class getSmsStatusResponse extends ApiResponseBase {
  balance: number;
}