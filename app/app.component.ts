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
    <ul *ngFor="let currentAnimal of animals">
      <li>Species: {{currentAnimal.species}}</li>
      <li>Name: {{currentAnimal.name}}</li>
      <li>Age: {{currentAnimal.age}}</li>
      <li>Diet: {{currentAnimal.diet}}</li>
      <li>Location: {{currentAnimal.location}}</li>
      <li>Caretakers: {{currentAnimal.caretakers}}</li>
      <li>Sex: {{currentAnimal.sex}}</li>
      <li>Likes: {{currentAnimal.likes}}</li>
      <li>Dislikes: {{currentAnimal.dislikes}}</li>
      <button class="edit-btn" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
    </ul>
  </div>
  `
})

export class AppComponent {
  zooName: string = 'YouZoo';
  animals: Animal[] = [
    new Animal('Crow', 'Capt. Black Sparrow', 2, 'Omnivore', 'E7', 2, 'Male', 'French Fries', 'Humans'),
    new Animal('Black Bear', 'Elsa Major', 2, 'Omnivore', 'C3', 4, 'Female', 'Puzzles', 'Bees'),
    new Animal('Siberian Tiger', 'Kitty', 2, 'Carnivore', 'D2', 2, 'Female', 'Riddles', 'Puns'),
  ];
selectedAnimal = null;

editButtonHasBeenClicked() {
  console.log("edit");
}

}
