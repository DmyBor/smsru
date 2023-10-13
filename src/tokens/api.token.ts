import { Token } from 'typedi';

export const ApiToken = new Token<string | null>('SMS_RU_API_TOKEN');