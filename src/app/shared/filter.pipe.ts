import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value :any[] ,filterstring :string ,propname  :string) :any[] {
    const result :any=[];
    if(value || filterstring==='' ||propname==='')

    value.forEach((a :any)=>{
      if(a[propname].trim().toLowerCase().includes(filterstring.toLocaleLowerCase())){
        result.push(a);
      }
    })
    return result;
  }

}
