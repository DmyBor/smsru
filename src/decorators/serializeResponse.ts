import { ApiResponseBase } from '../types/CoreTypes';
import { plainToClass  } from 'class-transformer';

export function serializeResponse(value: typeof ApiResponseBase) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let method = descriptor.value!;
 
    descriptor.value = function () {
      const _arguments = arguments;
      return new Promise((resolve, reject) => {
        let result: Promise<ApiResponseBase> = method.apply(this, _arguments);
        result.
          then((data: ApiResponseBase) => {
            const resp = plainToClass(value, data);
            resolve(resp);
          })
          .catch((err: any) => {
            reject(err);
          });

      });
    };
  };
}