import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    const stateCode = value.slice(0, 2);
    value = value.substr(2);
    const extraNum = value.slice(0, 1);
    value = value.substr(1);
    const number = `${value.slice(0, 4)}-${value.slice(4)}`;
    return `(${stateCode}) ${extraNum} ${number}`;
  }
}
