import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>{{zooName}}</h1>
  </div>
  <div class="container">
    <h3>Featured Animals</h3>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal class="new-animal" (newAnimalSender)="addAnimal($event)" [childNewAnimal]="isNew"></new-animal>
  </div>
  `
})

export class AppComponent {
  zooName: string = 'YouZoo';
  masterAnimalList: Animal[] = [
    new Animal('Crow', 'Capt. Black Sparrow', 2, 'Omnivore', 'E7', 2, 'Male', 'French Fries', 'Humans'),
    new Animal('Black Bear', 'Elsa Major', 7, 'Omnivore', 'C3', 4, 'Female', 'Puzzles', 'Bees'),
    new Animal('Siberian Tiger', 'Kitty', 2, 'Carnivore', 'D2', 2, 'Female', 'Riddles', 'Puns'),
  ];
  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }
  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
