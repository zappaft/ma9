import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexlabel',
})
export class SexLabelPipe implements PipeTransform {
  transform(value: string): string {
    if (['F', 'Female', 'Fem'].includes(value)) return 'Mulher';
    return 'Homem';
  }
}
