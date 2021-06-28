import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rowlabel',
})
export class RowLabelPipe implements PipeTransform {
  transform(value: string | number, sizeLimit: number = 25): string {
    value = typeof value === 'string' ? value : value.toString();
    if (value.length > sizeLimit) return `${value.slice(0, 23)}...`;
    return value;
  }
}
