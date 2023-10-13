import { Service } from 'typedi';

import { sendRequest } from "../core/request"
import { checkAuthRequestDTO,
         checkAuthRequest, 
         checkAuthResponse, 
        } from "../models/AuthApiProviderDto";

import { serializeResponse } from "../decorators/serializeResponse";

@Service()
export class AuthApiProvider {

  @serializeResponse(new checkAuthResponse)
  public async checkAuth(data: checkAuthRequestDTO): Promise<checkAuthResponse> {
    const requestData: checkAuthRequest = {
      url: 'https://sms.ru/auth/check',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<checkAuthResponse>(requestData);
    return resp;
  }
}