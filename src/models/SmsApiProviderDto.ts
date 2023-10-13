import { ApiRequestOptions, ApiRequestBodyOptions, ApiResponseBase } from '../types/CoreTypes';

export interface SmsRequestDTO  extends ApiRequestBodyOptions {
  msg?: string;
  [keys: string]: any;
}
export interface GetSmsStatusRequestDTO  extends ApiRequestBodyOptions {
  sms_id: string;
}

export interface SmsRequest extends ApiRequestOptions {
  body: SmsRequestDTO;
}
export interface GetSmsStatusRequest extends ApiRequestOptions {
  body: GetSmsStatusRequestDTO;
}

export class SmsResponse extends ApiResponseBase {
  balance: number;
}
export class GetSmsStatusResponse extends ApiResponseBase {
  balance: number;
}