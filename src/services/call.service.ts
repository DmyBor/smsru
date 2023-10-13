import { Service, Inject } from 'typedi';
import { RequestProvider }  from '../providers/RequestProvider';

import { sendAuthCodeRequestDTO,
  sendAuthCodeRequest, 
  sendAuthCodeResponse, 
 } from "../models/CallApiProviderDto";

import { serializeResponse } from "../decorators/serializeResponse";

@Service()
export class CallService {

  constructor(
    @Inject() private requestProvider : RequestProvider
  ) { }

  @serializeResponse(sendAuthCodeResponse)
  async sendAuthCode(phone: string, ip: string): Promise<sendAuthCodeResponse> {
    const data: sendAuthCodeRequestDTO = {
      phone,
      ip,
      json: 1
    };

    const requestData: sendAuthCodeRequest = {
      url: 'https://sms.ru/code/call',
      method: 'POST',
      body: data
    };

    const resp = await this.requestProvider.sendRequest<sendAuthCodeResponse>(requestData);
    return resp;
  }
}