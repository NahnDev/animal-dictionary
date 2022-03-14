import { ExposeOptions, Transform } from 'class-transformer';

export const ExposeId = function (options?: ExposeOptions) {
  return (target: object, propertyKey: string) => {
    Transform(({ obj }) => {
      try {
        return obj[propertyKey].toHexString();
      } catch {
        return obj[propertyKey];
      }
    }, options)(target, propertyKey);
  };
};