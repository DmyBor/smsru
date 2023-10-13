import { ApiRequestOptions, ApiRequestBodyOptions, ApiResponseBase } from '../types/CoreTypes';

export interface checkAuthRequestDTO  extends ApiRequestBodyOptions {}

export interface checkAuthRequest extends ApiRequestOptions {
  body: checkAuthRequestDTO;
}

export class checkAuthResponse extends ApiResponseBase {}