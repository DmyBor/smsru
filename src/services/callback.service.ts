import { Service, Inject } from 'typedi';
import { RequestProvider }  from '../providers/RequestProvider';

import { 
  addCallbackRequestDTO,
  deleteCallbackRequestDTO, 
  getCallbacksRequestDTO,
  addCallbackRequest,
  deleteCallbackRequest,
  getCallbacksRequest,
  addCallbackResponse,
  deleteCallbackResponse,
  getCallbacksResponse, 
} from "../models/CallbackApiProviderDto";

import { serializeResponse } from "../decorators/serializeResponse";

@Service()
export class CallbackService {
  constructor(
    @Inject() private requestProvider : RequestProvider
  ) {}

  // TODO I don't like JSON response in every function, need to refactor
  @serializeResponse(addCallbackResponse)
  async addCallback(url: string | URL): Promise<addCallbackResponse> {
    const data: addCallbackRequestDTO = {
      url: typeof url == 'string' ? new URL(url) : url,
      json: 1
    };

    const requestData: addCallbackRequest = {
      url: 'https://sms.ru/callback/add',
      method: 'POST',
      body: data
    };

    const resp = await this.requestProvider.sendRequest<addCallbackResponse>(requestData);
    return resp;
  }

  @serializeResponse(deleteCallbackResponse)
  async deleteCallback(url: string | URL): Promise<deleteCallbackResponse> {
    const data: deleteCallbackRequestDTO = {
      url: typeof url == 'string' ? new URL(url) : url,
      json: 1
    };

    const requestData: deleteCallbackRequest = {
      url: 'https://sms.ru/callback/del',
      method: 'POST',
      body: data
    };

    const resp = await this.requestProvider.sendRequest<deleteCallbackResponse>(requestData);
    return resp;
  }

  @serializeResponse(getCallbacksResponse)
  async getCallbacks(): Promise<getCallbacksResponse> {
    const data: getCallbacksRequestDTO = {
      json: 1
    };

    const requestData: getCallbacksRequest = {
      url: 'https://sms.ru/callback/get',
      method: 'POST',
      body: data
    };

    const resp = await this.requestProvider.sendRequest<getCallbacksResponse>(requestData);
    return resp;
  }
}