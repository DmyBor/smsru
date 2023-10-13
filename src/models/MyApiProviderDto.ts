import { ApiRequestOptions, ApiRequestBodyOptions, ApiResponseBase } from '../types/CoreTypes';

export interface getMyRequestDTO  extends ApiRequestBodyOptions {}

export interface getMyRequest extends ApiRequestOptions {
  body: getMyRequestDTO;
}

export class getBalanceResponse extends ApiResponseBase {
  balance?: number;
}
export class getLimitsResponse extends ApiResponseBase {
  total_limit?: number;
  used_today?: number;
}
export class getFreeUsageResponse extends ApiResponseBase {
  total_free?: number;
  used_today?: number;
}
export class getSendersResponse extends ApiResponseBase {
  senders?: string[];
}