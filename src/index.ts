import 'reflect-metadata';
import { Container } from 'typedi';

import { ApiToken } from './tokens/api.token';
import { LoginToken } from './tokens/login.token';

import { MyService }  from './services/my.service';
import { AuthService }  from './services/auth.service';
import { StopListService }  from './services/stoplist.service';
// import { CallbackService }  from './services/callback.service';
// import { CallService }  from './services/call.service';
// import { SmsService }  from './services/sms.service';

// Container.set(ApiToken, '07AD42B3-2BBF-6768-EAB7-38C88523CDBA');
const auth = require('../config.json');
Container.set(LoginToken, {
  login: auth.user,
  password: auth.password
});

Container.set(ApiToken, null);
// Container.set(ApiToken, auth.apiKey);

const My = Container.get(MyService);
const Auth = Container.get(AuthService);
const stopList = Container.get(StopListService);
// const callback = Container.get(CallbackService);
// const call = Container.get(CallService);
// const sms = Container.get(SmsService);

My.getBalance()
  .then((response) => { 
    console.log(response)
    return My.getLimits();
  })
  .then((response) => {
    console.log(response)
    return My.getFreeUsage();
  })
  .then((response) => {
    console.log(response)
    return My.getSenders();
  })
  .then((response) => {
    console.log(response);
    return Auth.checkAuth();
  })
  .then((response) => {
    console.log(response);
    return stopList.addPhone('79539284708', 'test');
  })
  .then((response) => {
     console.log(response);
    return stopList.getPhones();
  })
  .then((response) => {
    console.log(response);
    return stopList.deletePhone('79539284708');
  })
  .then((response) => {
    console.log(response);
    return stopList.getPhones();
  })
  // .then((response) => {
  //   console.log(response);
  //   return callback.addCallback("http://example.com/callback");
  // })
  // .then((response) => {
  //   console.log(response);
  //   return callback.getCallbacks();
  // })
  // .then((response) => {
  //   console.log(response);
  //   return callback.deleteCallback("http://example.com/callback");
  // })
  // .then((response) => {
  //   console.log(response);
  //   return callback.getCallbacks();
  // })
  // .then((response) => {  
  //   console.log(response);
  //   return call.sendAuthCode('79539284707', '33.22.11.55');
  // })
  // .then((response) => {
  //   console.log(response)
  //   return sms.getSmsCost();
  // })
  // .then((response) => {
  //   console.log(response)
  //   return sms.sendSms();
  // })
  // .then((response) => {
  //   console.log(response)
  //   return sms.getStatus();
  // })
  .then((response) => {
    console.log(response)
  })