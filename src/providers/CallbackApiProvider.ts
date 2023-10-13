import { Service } from 'typedi';

import { sendRequest } from "../core/request"

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
export class CallbackApiProvider {
  
  @serializeResponse(new addCallbackResponse)
  public async addCallback(data: addCallbackRequestDTO): Promise<addCallbackResponse> {
    const requestData: addCallbackRequest = {
      url: 'https://sms.ru/callback/add',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<addCallbackResponse>(requestData);
    return resp;
  }

  @serializeResponse(new deleteCallbackResponse)
  public async deleteCallback(data: deleteCallbackRequestDTO): Promise<deleteCallbackResponse> {
    const requestData: deleteCallbackRequest = {
      url: 'https://sms.ru/callback/del',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<deleteCallbackResponse>(requestData);
    return resp;
  }

  @serializeResponse(new getCallbacksResponse)
  public async getCallbacks(data: getCallbacksRequestDTO): Promise<getCallbacksResponse> {
    const requestData: getCallbacksRequest = {
      url: 'https://sms.ru/callback/get',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<getCallbacksResponse>(requestData);
    return resp;
  }
}