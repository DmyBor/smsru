import { ApiRequestOptions, ApiRequestBodyOptions, ApiResponseBase } from '../types/CoreTypes';

export interface addPhoneRequestDTO extends ApiRequestBodyOptions {
  stoplist_phone: string;
  stoplist_text: string;
}
export interface deletePhoneRequestDTO extends ApiRequestBodyOptions {
  stoplist_phone: string;
}
export interface getPhonesRequestDTO extends ApiRequestBodyOptions {}

export interface addPhoneRequest extends ApiRequestOptions {
  body: addPhoneRequestDTO;
}
export interface deletePhoneRequest extends ApiRequestOptions {
  body: deletePhoneRequestDTO;
}
export interface getPhonesRequest extends ApiRequestOptions {
  body: getPhonesRequestDTO;
}

export class addPhoneResponse extends ApiResponseBase {
}
export class deletePhoneResponse extends ApiResponseBase {
}
export class getPhonesResponse extends ApiResponseBase {
  stoplist: Array<Record<string, string>>;
}