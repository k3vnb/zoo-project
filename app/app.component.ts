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
    <div *ngIf="selectedAnimal">
      <h3>Edit Animal</h3>
      <label>Species:</label>
      <input [(ngModel)]="selectedAnimal.species"><br>
      <label>Name:</label>
      <input [(ngModel)]="selectedAnimal.name"><br>
      <label>Age:</label>
      <input [(ngModel)]="selectedAnimal.age"><br>
      <label>Diet:</label>
      <input [(ngModel)]="selectedAnimal.diet"><br>
      <label>Location:</label>
      <input [(ngModel)]="selectedAnimal.location"><br>
      <label>Sex:</label>
      <input [(ngModel)]="selectedAnimal.sex"><br>
      <label>likes:</label>
      <input [(ngModel)]="selectedAnimal.likes"><br>
      <label>Dislikes:</label>
      <input [(ngModel)]="selectedAnimal.dislikes"><br>
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  zooName: string = 'YouZoo';
  masterAnimalList: Animal[] = [
    new Animal('Crow', 'Capt. Black Sparrow', 2, 'Omnivore', 'E7', 2, 'Male', 'French Fries', 'Humans'),
    new Animal('Black Bear', 'Elsa Major', 2, 'Omnivore', 'C3', 4, 'Female', 'Puzzles', 'Bees'),
    new Animal('Siberian Tiger', 'Kitty', 2, 'Carnivore', 'D2', 2, 'Female', 'Riddles', 'Puns'),
  ];
selectedAnimal = null;

editAnimal(clickedAnimal) {
  this.selectedAnimal = clickedAnimal;
}
finishedEditing() {
  this.selectedAnimal = null;
}

}
