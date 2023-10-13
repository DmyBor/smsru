import { Token } from 'typedi';

export type LoginTokenType = {
  login: string;
  password: string;
};

export const LoginToken = new Token<LoginTokenType>('SMS_RU_LOGIN');