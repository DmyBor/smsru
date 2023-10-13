import { Service, Inject } from 'typedi';

import { AuthApiProvider }  from '../providers/AuthApiProvider';
import { CredentialProvider }  from '../providers/CredentialProvider';

@Service()
export class AuthService {
  constructor(
    @Inject()
    private credProvider: CredentialProvider,
    private apiProvider: AuthApiProvider
  ) {}

  // TODO I don't like JSON response in every function, need to refactor
  async checkAuth() {
    return await this.apiProvider.checkAuth({
      ...this.credProvider.getCredentials(),
      json: 1
    });
  }
}