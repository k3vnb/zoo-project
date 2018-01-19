import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New Task</h1>
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
    <label name="sex">Sex:</label>
    <input #newSex name="sex"><br>
    <label name="likes">Likes:</label>
    <input #newLikes name="likes"><br>
    <label name="dislikes">Dislikes:</label>
    <input #newDislikes name="dislikes"><br>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
  `
})

export class NewAnimalComponent {
  
}
