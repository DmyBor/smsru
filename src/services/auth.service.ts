import { Service, Inject } from 'typedi';
import { RequestProvider }  from '../providers/RequestProvider';

import {
  checkAuthRequestDTO,
  checkAuthRequest, 
  checkAuthResponse, 
 } from "../models/AuthApiProviderDto";

import { serializeResponse } from "../decorators/serializeResponse";

@Service()
export class AuthService {
  constructor(
    @Inject() private requestProvider : RequestProvider
  ) {}

  // TODO I don't like JSON response in every function, need to refactor
  @serializeResponse(new checkAuthResponse)
  async checkAuth(): Promise<checkAuthResponse> {

    const requestData: checkAuthRequest = {
      url: 'https://sms.ru/auth/check',
      method: 'POST',
      body: {
        json: 1
      }
    };

    const resp = await this.requestProvider.sendRequest<checkAuthResponse>(requestData);
    return resp;
  }
}