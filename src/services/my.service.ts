import { Service, Inject } from 'typedi';
import { RequestProvider }  from '../providers/RequestProvider';

import { 
  getMyRequestDTO,
  getMyRequest, 
  getBalanceResponse, 
  getLimitsResponse,
  getFreeUsageResponse,
  getSendersResponse
 } from "../models/MyApiProviderDto";

import { serializeResponse } from "../decorators/serializeResponse";

@Service()
export class MyService {
  constructor(
    @Inject() private requestProvider : RequestProvider
  ) {}

  // TODO I don't like JSON response in every function,
  @serializeResponse(new getBalanceResponse)
  async getBalance(): Promise<getBalanceResponse> {
    const requestData: getMyRequest = {
      url: 'https://sms.ru/my/balance',
      method: 'POST',
      body: {
        json: 1
      }
    };

    return await this.requestProvider.sendRequest<getBalanceResponse>(requestData);
  }

  @serializeResponse(new getLimitsResponse)
  async getLimits(): Promise<getLimitsResponse> {
    const requestData: getMyRequest = {
      url: 'https://sms.ru/my/limit',
      method: 'POST',
      body: {
        json: 1
      }
    };

    const resp = await this.requestProvider.sendRequest<getLimitsResponse>(requestData);
    return resp;
  }

  @serializeResponse(new getFreeUsageResponse)
  async getFreeUsage(): Promise<getFreeUsageResponse> {
    const requestData: getMyRequest = {
      url: 'https://sms.ru/my/free',
      method: 'POST',
      body: {
        json: 1
      }
    };

    const resp = await this.requestProvider.sendRequest<getFreeUsageResponse>(requestData);
    return resp;
  }

  @serializeResponse(new getSendersResponse)
  async getSenders(): Promise<getSendersResponse> {
    const requestData: getMyRequest = {
      url: 'https://sms.ru/my/senders',
      method: 'POST',
      body: {
        json: 1
      }
    };

    const resp = await this.requestProvider.sendRequest<getSendersResponse>(requestData);
    return resp;
  }
}