import { ApiRequestOptions, ApiRequestBodyOptions, ApiResponseBase } from '../types/CoreTypes';

export interface addCallbackRequestDTO extends ApiRequestBodyOptions {
  url: URL;
}
export interface deleteCallbackRequestDTO extends ApiRequestBodyOptions {
  url: URL;
}
export interface getCallbacksRequestDTO extends ApiRequestBodyOptions {}

export interface addCallbackRequest extends ApiRequestOptions {
  body: addCallbackRequestDTO;
}
export interface deleteCallbackRequest extends ApiRequestOptions {
  body: deleteCallbackRequestDTO;
}
export interface getCallbacksRequest extends ApiRequestOptions {
  body: getCallbacksRequestDTO;
}

export class addCallbackResponse extends ApiResponseBase {
}
export class deleteCallbackResponse extends ApiResponseBase {
}
export class getCallbacksResponse extends ApiResponseBase {
  // callback: Array<string>;
  test: string;
}