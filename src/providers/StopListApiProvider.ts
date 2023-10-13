import { Service } from 'typedi';

import { sendRequest } from "../core/request"
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
export class StopListApiProvider {
  
  @serializeResponse(new addPhoneResponse)
  public async addPhone(data: addPhoneRequestDTO): Promise<addPhoneResponse> {
    const requestData: addPhoneRequest = {
      url: 'https://sms.ru/stoplist/add',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<addPhoneResponse>(requestData);
    return resp;
  }

  @serializeResponse(new deletePhoneResponse)
  public async deletePhone(data: deletePhoneRequestDTO): Promise<deletePhoneResponse> {
    const requestData: deletePhoneRequest = {
      url: 'https://sms.ru/stoplist/del',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<deletePhoneResponse>(requestData);
    return resp;
  }

  @serializeResponse(new getPhonesResponse)
  public async getPhones(data: getPhonesRequestDTO): Promise<getPhonesResponse> {
    const requestData: getPhonesRequest = {
      url: 'https://sms.ru/stoplist/get',
      method: 'POST',
      body: data
    };

    const resp = await sendRequest<getPhonesResponse>(requestData);
    return resp;
  }
}