import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(value: string): string {
    const first = value.slice(0, 3);
    value = value.substr(3);
    const second = value.slice(0, 3);
    value = value.substr(3);
    const third = value.slice(0, 3);
    value = value.substr(3);
    return `${first}.${second}.${third}-${value}`;
  }
}
