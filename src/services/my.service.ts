import { Service, Inject } from 'typedi';

import { MyApiProvider }  from '../providers/MyApiProvider';
import { CredentialProvider }  from '../providers/CredentialProvider';

@Service()
export class MyService {
  constructor(
    @Inject()
    private credProvider: CredentialProvider,
    private apiProvider: MyApiProvider
  ) {}
  // TODO I don't like JSON response in every function,
  async getBalance() {
    return await this.apiProvider.getBalance({
      ...this.credProvider.getCredentials(),
      json: 1
    });
  }

  async getLimits() {
    return await this.apiProvider.getLimits({
      ...this.credProvider.getCredentials(),
      json: 1
    });
  }

  async getFreeUsage() {
    return await this.apiProvider.getFreeUsage({
      ...this.credProvider.getCredentials(),
      json: 1
    });
  }

  async getSenders() {
    return await this.apiProvider.getSenders({
      ...this.credProvider.getCredentials(),
      json: 1
    });
  }
}