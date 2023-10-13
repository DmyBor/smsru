import { Service, Inject } from 'typedi';

import { SmsApiProvider } from '../providers/SmsApiProvider';
import { CredentialProvider } from '../providers/CredentialProvider';

import {
  SmsRequestDTO,
  getSmsStatusRequestDTO,
} from "../models/SmsApiProviderDto";

@Service()
export class SmsService {

  constructor(
    @Inject()
    private credProvider: CredentialProvider,
    private apiProvider: SmsApiProvider
  ) { }

  async getSmsCost(phone: string, ip: string) {
    const data: SmsRequestDTO = {
      phone,
      ip,
      json: 1,
      ...this.credProvider.getCredentials()
    };

    return await this.apiProvider.getSmsCost(data);
  }

  async sendSms(phone: string, ip: string) {
    
  }

  async getSmsStatus(phone: string, ip: string) {
   
  }
}