import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="newbie">
      <h4>New Animal</h4>
      <label name="species">Species:</label>
      <input #newSpecies name="species"><br>
      <label name="name">Name:</label>
      <input #newName name="name"><br>
      <label name="age">Age:</label>
      <input #newAge name="age"><br>
      <label name="diet">Diet:</label>
      <input #newDiet name="diet"><br>
      <label name="location">Location:</label>
      <input #newLocation name="location"><br>
      <label name="caretakers">Caretakers:</label>
      <input #newCaretakers name="caretakers"><br>
      <label name="sex">Sex:</label>
      <input #newSex name="sex"><br>
      <label name="likes">Likes:</label>
      <input #newLikes name="likes"><br>
      <label name="dislikes">Dislikes:</label>
      <input #newDislikes name="dislikes"><br>
      <button class="add-btn" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Input() childNewAnimal: Animal[];
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, caretakers: number, location: string, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
