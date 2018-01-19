import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <ul>
      <li>Species: {{currentAnimal.species}}</li>
      <li>Name: {{currentAnimal.name}}</li>
      <li>Age: {{currentAnimal.age}}</li>
      <li>Diet: {{currentAnimal.diet}}</li>
      <li>Location: {{currentAnimal.location}}</li>
      <li>Caretakers: {{currentAnimal.caretakers}}</li>
      <li>Sex: {{currentAnimal.sex}}</li>
      <li>Likes: {{currentAnimal.likes}}</li>
      <li>Dislikes: {{currentAnimal.dislikes}}</li>
    </ul>
    <button class="edit-btn" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
  `
})

export class AnimalListComponent {

}
