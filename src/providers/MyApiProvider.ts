import { Service } from 'typedi';

import { sendRequest } from "../core/request"
import { getMyRequestDTO,
         getMyRequest, 
         getBalanceResponse, 
         getLimitsResponse,
         getFreeUsageResponse,
         getSendersResponse
        } from "../models/MyApiProviderDto";

import { serializeResponse } from "../decorators/serializeResponse";

@Service()
export class MyApiProvider {
  @serializeResponse(new getBalanceResponse)
  public async getBalance(data: getMyRequestDTO): Promise<getBalanceResponse> {
    const requestData: getMyRequest = {
      url: 'https://sms.ru/my/balance',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<getBalanceResponse>(requestData);
    return resp;
  }

  @serializeResponse(new getLimitsResponse)
  public async getLimits(data: getMyRequestDTO): Promise<getLimitsResponse> {
    const requestData: getMyRequest = {
      url: 'https://sms.ru/my/limit',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<getLimitsResponse>(requestData);
    return resp;
  }
  
  @serializeResponse(new getFreeUsageResponse)
  public async getFreeUsage(data: getMyRequestDTO) {
    const requestData: getMyRequest = {
      url: 'https://sms.ru/my/free',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<getFreeUsageResponse>(requestData);
    return resp;
  }

  @serializeResponse(new getSendersResponse)
  public async getSenders(data: getMyRequestDTO) {
    const requestData: getMyRequest = {
      url: 'https://sms.ru/my/senders',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<getSendersResponse>(requestData);
    return resp;
  }
}