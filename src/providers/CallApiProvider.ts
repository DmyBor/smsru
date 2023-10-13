import { Service } from 'typedi';

import { sendRequest } from "../core/request"
import { sendAuthCodeRequestDTO,
         sendAuthCodeRequest, 
         sendAuthCodeResponse, 
        } from "../models/CallApiProviderDto";

import { serializeResponse } from "../decorators/serializeResponse";

@Service()
export class CallApiProvider {

  @serializeResponse(new sendAuthCodeResponse)
  public async sendAuthCode(data: sendAuthCodeRequestDTO): Promise<sendAuthCodeResponse> {
    const requestData: sendAuthCodeRequest = {
      url: 'https://sms.ru/code/call',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<sendAuthCodeResponse>(requestData);
    return resp;
  }
}