import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseMultipartFormDataPipe<T extends object> implements PipeTransform {
  transform(value: T) {
    return Object.fromEntries(
      Object.entries(value).map(([key, value]) => {
        let parsedValue;

        try {
          parsedValue = JSON.parse(value);
        } catch {
          parsedValue = value;
        }

        return [key, parsedValue];
      }),
    );
  }
}
