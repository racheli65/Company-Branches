import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false,
  standalone:true
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    if (!array || !field) {
      return array;
    }

    return array.slice().sort((a, b) => {
      const valueA = isNaN(+a[field]) ? a[field] : +a[field];
      const valueB = isNaN(+b[field]) ? b[field] : +b[field];

      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}