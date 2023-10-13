import { Service, Inject } from 'typedi';

import { ApiToken } from '../tokens/api.token';
import { LoginToken, LoginTokenType } from '../tokens/login.token';

@Service()
export class CredentialProvider {
  @Inject(ApiToken)
  ApiToken: string | null;

  @Inject(LoginToken)
  LoginToken: LoginTokenType;

  getCredentials(): any  {
    if (this.ApiToken) return { api_id: this.ApiToken };
    if (this.LoginToken?.login && this.LoginToken?.password) return this.LoginToken;

    throw new Error('No credentials provided');
  }
}