import { Service, Inject } from 'typedi';

import { RequestProvider }  from '../providers/RequestProvider';

import {  addPhoneRequestDTO,
  deletePhoneRequestDTO, 
  getPhonesRequestDTO,
  addPhoneRequest,
  deletePhoneRequest,
  getPhonesRequest,
  addPhoneResponse,
  deletePhoneResponse,
  getPhonesResponse, 
} from "../models/StopListApiProviderDto";

import { serializeResponse } from "../decorators/serializeResponse";

@Service()
export class StopListService {

  constructor(
    @Inject() private requestProvider : RequestProvider
  ) { }

  // TODO I don't like JSON response in every function, need to refactor
  @serializeResponse(addPhoneResponse)
  async addPhone(phone: string, text: string): Promise<addPhoneResponse> {
    const data: addPhoneRequestDTO = {
      stoplist_phone: phone,
      stoplist_text: text,
      json: 1,
    };

    const requestData: addPhoneRequest = {
      url: 'https://sms.ru/stoplist/add',
      method: 'POST',
      body: data
    };

    const resp = await this.requestProvider.sendRequest<addPhoneResponse>(requestData);
    return resp;
  }

  @serializeResponse(deletePhoneResponse)
  async deletePhone(phone: string): Promise<deletePhoneResponse> {
    const data: deletePhoneRequestDTO = {
      stoplist_phone: phone,
      json: 1
    };

    const requestData: deletePhoneRequest = {
      url: 'https://sms.ru/stoplist/del',
      method: 'POST',
      body: data
    };

    const resp = await this.requestProvider.sendRequest<deletePhoneResponse>(requestData);
    return resp;
  }

  @serializeResponse(getPhonesResponse)
  async getPhones(): Promise<getPhonesResponse> {
    const requestData: getPhonesRequest = {
      url: 'https://sms.ru/stoplist/get',
      method: 'POST',
      body: {
        json: 1
      }
    };

    const resp = await this.requestProvider.sendRequest<getPhonesResponse>(requestData);
    return resp;
  }
}