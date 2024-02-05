import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'distinct',
  pure: false  ,
  standalone:true,     // Set pure to false to make it impure, allowing for dynamic updates
})

export class DistinctPipe implements PipeTransform {
  transform(value: any[], property?: string): any[] {
    if (!value || !Array.isArray(value) || value.length === 0) {
      return value;
    }

    const uniqueItems = new Set<any>();
    
    return value.filter(item => {
      const key = property ? item[property] : item;
      if (!uniqueItems.has(key)) {
        uniqueItems.add(key);
        return true;
      }
      return false;
    });
  }
}