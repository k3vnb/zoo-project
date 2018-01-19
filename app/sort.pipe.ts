import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "sort",
  pure: false
})


export class SortPipe implements PipeTransform {
  transform(input: Animal[], desiredSorting) {
    var output: Animal[] = [];
    if(desiredSorting === "youngAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredSorting === "newAnimals") {
      for (var i = 3; i < input.length; i++) {
          output.push(input[i]);
      } return output;
    } else {
      return input;
    }
  }
}
