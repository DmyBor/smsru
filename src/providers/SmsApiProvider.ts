import { Service } from 'typedi';

import { sendRequest } from "../core/request"
import { SmsRequestDTO,
         getSmsStatusRequestDTO, 
         SmsRequest, 
         getSmsStatusRequest, 
         SmsResponse,
         getSmsStatusResponse, 
        } from "../models/SmsApiProviderDto";

import { serializeResponse } from "../decorators/serializeResponse";

@Service()
export class SmsApiProvider {

  @serializeResponse(new SmsResponse)
  public async getSmsCost(data: SmsRequestDTO): Promise<SmsResponse> {
    const requestData: SmsRequest = {
      url: 'https://sms.ru/sms/cost',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<SmsResponse>(requestData);
    return resp;
  }

  @serializeResponse(new SmsResponse)
  public async sendSms(data: SmsRequestDTO): Promise<SmsResponse> {
    const requestData: SmsRequest = {
      url: 'https://sms.ru/sms/send',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<SmsResponse>(requestData);
    return resp;
  }

  @serializeResponse(new getSmsStatusResponse)
  public async getStatus(data: getSmsStatusRequestDTO): Promise<getSmsStatusResponse> {
    const requestData: getSmsStatusRequest = {
      url: 'https://sms.ru/sms/status',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<getSmsStatusResponse>(requestData);
    return resp;
  }
}