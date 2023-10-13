import { Service, Inject } from 'typedi';
import fetch from "node-fetch";
import { URL } from 'node:url';


import { CredentialProvider }  from './CredentialProvider';
import { ApiRequestOptions, ApiRequestBodyOptions } from "../types/CoreTypes";

@Service()
export class RequestProvider {
  @Inject() private credProvider: CredentialProvider;

  public async sendRequest<K>(props: ApiRequestOptions): Promise<K> {
    const { url, method, body } = props;
  
    if (method === 'GET' && body) {
      return await this.sendGetRequest(props);
    }
    if (method === 'POST' && body) {
      return await this.sendPostRequest(props);
    }
  
    throw new Error(`Method: ${method} not implemented`);
  }
  
  private async sendGetRequest<T>(props: ApiRequestOptions): Promise<T>  {
    const { url, method, body } = props;
    const urlInstance = new URL(url);
  
    for (const key in body) {
      const val = body[key  as keyof ApiRequestBodyOptions];
      urlInstance.searchParams.append(key, String(val));
    }
    const credo = this.credProvider.getCredentials();
    for (const key in credo) {
      const val = credo[key];
      urlInstance.searchParams.append(key, String(val));
    }


    const response = await fetch(urlInstance, {
      method,
    });
  
    // TODO think better way to handle errors
    if (response.status !== 200) {
      throw new Error(`Response status: ${response.status} ${response.statusText}`);
    }
  
    const data = await response.json() as T;
    return data;
  }
  
  private async sendPostRequest<T>(props: ApiRequestOptions): Promise<T> {
    const { url, method, body } = props;
    const urlInstance = new URL(url);
  
    for (const key in body) {
      const val = body[key  as keyof ApiRequestBodyOptions];
      urlInstance.searchParams.append(key, String(val));
    }

    const credo = this.credProvider.getCredentials();
    for (const key in credo) {
      const val = credo[key];
      urlInstance.searchParams.append(key, String(val));
    }

    const response = await fetch(urlInstance, {
      method,
      body: JSON.stringify(body)
    });
    
     // TODO think better way to handle errors
    if (response.status !== 200) {
      throw new Error(`Response status: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json() as T;
    return data;
  }
}