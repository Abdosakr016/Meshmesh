import { Pipe, PipeTransform } from '@angular/core';
import { Ipet } from '../interface/Ipet';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(pets: Ipet[], filterText: string): Ipet[] {
    if (!filterText) {
      return pets; // If no filter text, return the original array
    } else {
      return pets.filter((pet) => {
        // Use includes() for a more flexible matching
        return pet.price.toString().toLowerCase().includes(filterText.toLowerCase());
      });
    }
  }
}
