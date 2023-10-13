import { Service, Inject } from 'typedi';

import { CallApiProvider } from '../providers/CallApiProvider';
import { CredentialProvider } from '../providers/CredentialProvider';

import {
  sendAuthCodeRequestDTO,
} from "../models/CallApiProviderDto";

@Service()
export class CallService {

  constructor(
    @Inject()
    private credProvider: CredentialProvider,
    private apiProvider: CallApiProvider
  ) { }

  async sendAuthCode(phone: string, ip: string) {
    const data: sendAuthCodeRequestDTO = {
      phone,
      ip,
      json: 1,
      ...this.credProvider.getCredentials()
    };

    return await this.apiProvider.sendAuthCode(data);
  }
}