import { ApiRequestOptions, ApiRequestBodyOptions, ApiResponseBase } from '../types/CoreTypes';

export interface sendAuthCodeRequestDTO  extends ApiRequestBodyOptions {
  phone: string;
  ip: string;
}

export interface sendAuthCodeRequest extends ApiRequestOptions {
  body: sendAuthCodeRequestDTO;
}

export class sendAuthCodeResponse extends ApiResponseBase {
  status: string;
  code: number;
  call_id: string;
  cost: number;
  balance: number;
}