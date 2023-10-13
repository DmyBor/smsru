import { ApiResponseBase } from '../types/CoreTypes';
import { plainToClassFromExist  } from 'class-transformer';

export function serializeResponse(value: ApiResponseBase) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let method = descriptor.value!;
 
    descriptor.value = function () {
      const _arguments = arguments;
      return new Promise((resolve, reject) => {
        let result: Promise<ApiResponseBase> = method.apply(this, _arguments);
        result.
          then((data: ApiResponseBase) => {
            const resp = plainToClassFromExist(value, data);
            resolve(resp);
          })
          .catch((err: any) => {
            reject(err);
          });

      });
    };
  };
}