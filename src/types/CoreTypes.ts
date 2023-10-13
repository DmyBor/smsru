export class ApiResponseBase {
  status: string;
  status_code: number;
  status_text?: string;
}

export type ApiRequestBodyOptions = {
  readonly api_id?: string;
  readonly login?: string;
  readonly password?: string;
  readonly json: 1;
}

export type ApiRequestOptions = {
  readonly method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';
  readonly url: string;
  readonly body: ApiRequestBodyOptions;
};
