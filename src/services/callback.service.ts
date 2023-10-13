import { Service, Inject } from 'typedi';

import { CallbackApiProvider }  from '../providers/CallbackApiProvider';
import { CredentialProvider }  from '../providers/CredentialProvider';

import {
  addCallbackRequestDTO,
  deleteCallbackRequestDTO, 
  getCallbacksRequestDTO,
} from "../models/CallbackApiProviderDto";

@Service()
export class CallbackService {
  constructor(
    @Inject()
    private credProvider: CredentialProvider,
    private apiProvider: CallbackApiProvider
  ) {}

  // TODO I don't like JSON response in every function, need to refactor
  async addCallback(url: string | URL) {
    const data: addCallbackRequestDTO = {
      url: typeof url == 'string' ? new URL(url) : url,
      json: 1,
      ...this.credProvider.getCredentials()
    };

    return await this.apiProvider.addCallback(data);
  }

  async deleteCallback(url: string | URL) {
    const data: deleteCallbackRequestDTO = {
      url: typeof url == 'string' ? new URL(url) : url,
      json: 1,
      ...this.credProvider.getCredentials()
    };

    return await this.apiProvider.deleteCallback(data);
  }

  async getCallbacks() {
    const data: getCallbacksRequestDTO = {
      json: 1,
      ...this.credProvider.getCredentials()
    };

    return await this.apiProvider.getCallbacks(data);
  }
}