import { Service, Inject } from 'typedi';
import { RequestProvider } from '../providers/RequestProvider';

import {
  SmsRequestDTO,
  GetSmsStatusRequestDTO,
  SmsRequest,
  GetSmsStatusRequest,
  SmsResponse,
  GetSmsStatusResponse,
} from "../models/SmsApiProviderDto";

import { serializeResponse } from "../decorators/serializeResponse";

@Service()
export class SmsService {

  constructor(
    @Inject() private requestProvider: RequestProvider
  ) { }

  @serializeResponse(SmsResponse)
  async getSmsCost(phones: Record<string, string> | number[], text: string | undefined = undefined): Promise<SmsResponse> {
    const data: SmsRequestDTO = {
      json: 1
    };

    if (Array.isArray(phones)) {
      data.to = phones.join(',');
      data.msg = text;
    } else {
      for (let key in phones) {
        const k = `to[${key}]`;
        data[k] = phones[key];
      }
    }

    const requestData: SmsRequest = {
      url: 'https://sms.ru/sms/cost',
      method: 'POST',
      body: data
    };
    const resp = await this.requestProvider.sendRequest<SmsResponse>(requestData);
    return resp;
  }

  @serializeResponse(SmsResponse)
  async sendSms(phones: Record<string, string> | number[], text: string | undefined = undefined): Promise<SmsResponse> {
    const data: SmsRequestDTO = {
      json: 1
    };

    if (Array.isArray(phones)) {
      data.to = phones.join(',');
      data.msg = text;
    } else {
      for (let key in phones) {
        const k = `to[${key}]`;
        data[k] = phones[key];
      }
    }

    const requestData: SmsRequest = {
      url: 'https://sms.ru/sms/send',
      method: 'POST',
      body: data
    };

    const resp = await this.requestProvider.sendRequest<SmsResponse>(requestData);
    return resp;
  }

  @serializeResponse(GetSmsStatusResponse)
  async getSmsStatus(smsId: string[]): Promise<GetSmsStatusResponse>  {
    if (smsId.length === 0) throw new Error('smsId is empty');

    const requestData: GetSmsStatusRequest = {
      url: 'https://sms.ru/sms/status',
      method: 'POST',
      body: {
        sms_id: smsId.join(','),
        json: 1
      }
    };
    const resp = await this.requestProvider.sendRequest<GetSmsStatusResponse>(requestData);
    return resp;
  }
}