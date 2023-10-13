import { Service, Inject } from 'typedi';

import { StopListApiProvider } from '../providers/StopListApiProvider';
import { CredentialProvider } from '../providers/CredentialProvider';

import {
  addPhoneRequestDTO,
  deletePhoneRequestDTO,
  getPhonesRequestDTO,
} from "../models/StopListApiProviderDto";

@Service()
export class StopListService {

  constructor(
    @Inject()
    private credProvider: CredentialProvider,
    private apiProvider: StopListApiProvider
  ) { }

  // TODO I don't like JSON response in every function, need to refactor
  async addPhone(phone: string, text: string) {
    const data: addPhoneRequestDTO = {
      stoplist_phone: phone,
      stoplist_text: text,
      json: 1,
      ...this.credProvider.getCredentials()
    };

    return await this.apiProvider.addPhone(data);
  }

  async deletePhone(phone: string) {
    const data: deletePhoneRequestDTO = {
      stoplist_phone: phone,
      json: 1,
      ...this.credProvider.getCredentials()
    };

    return await this.apiProvider.deletePhone(data);
  }

  async getPhones() {
    const data: getPhonesRequestDTO = {
      json: 1,
      ...this.credProvider.getCredentials()
    };

    return await this.apiProvider.getPhones(data);
  }
}