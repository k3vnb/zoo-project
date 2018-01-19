# Zoo Project
### This is a demo project utilizing Angular 2 JS for interactive display of zoo animal stats. 1/19/17
### by **Kevin Boyle**

## Description

_ https://lemurriot.github.io// _


## Specs & Planning
_On load, this page will display a sample of database entries based on animal objects. An animal object, for example, would look like:
Species: "Crow"
Name: "Capt. Black Sparrow"
Age: 2
Diet: "Omnivore"
Location: "Section E4"
Caretakers: 1
Sex: "Male"
Likes: "French Fries"
Dislikes: "People"_


_The project will also allow interactive elements for users, for example:_
1. User may utilize a provided form to add new animals. An input field for each key (Species, Name, Age, etc...) will be provided. New animals will show on the list alongside the original set.

2. User may edit any animal objects by pressing the edit button associated with each object. A form field will be brought up on click of the 'edit' button where users may overwrite current values and upon click of the form's 'done' those new values will show on the list.

3. User may sort the list based on some boolean values. A drop-down menu will be provided with sorting options. At the outset there will be three options
  * Option one: Display only animals ages 2 or younger.
    - The system will have a hard coded boolean evaluating whether it is 'true' or 'false' that a particular animal is under two. If Option 1 is selected, only those animals for which this condition is 'true' will be displayed.
  * Option two: Display only animals that the user has added to the list.
    - The system will include a boolean value that will only evaluate to true if the user has added the animal object instance. Hard-coded animal objects will evaluate to false.
  * Option three: Display all animals. This will be the default display. If no other filtration options are selected, all animals will be displayed.

_With more time, more functionality could be built out including:_
4. User may timestamp admittance date to the animal object using Moment JS npm.
5. Animals could be displayed according to location within the zoo, and correspond to a displayed map of the zoo.

###Planning
_This project will need a **root component** (app.component) to establish a base, a **root module** (app.module) to organize imports from @angular/core & intra-app components, modules & pipes, a **main file** (app.main) to establish minimum platform necessary for running app in the browser. An **animal model** will be necessary to establish what kind of key-value pairs are included in the animal object, as well as boolean values (ie, age is over 2)._

_The app will also require 3 additional components: an **animal-list component**, which will act as first captain to the root component, and will handle event listeners within subsequent apps for dynamic and interactive list display. It will also house the html template for appending the lists of animals. An **edit-animal** component will be responsible for receiving data from its parent, allowing user to overwrite that data, and returning it to the parent via event listeners. A **new-animal** component will be responsible for allowing users to add new animals to the list by filling out a provided form and sending that information to the parent component.  Finally a sorting **pipe** will be necessary for filtering values based on selected filtration options, which will correspond to boolean values coded into the model_


## Setup Instructions
_ . _

## Additional info
_This page is not connected to a server, any user edits or contributions to the list will be erased when page is refreshed._


## Support and contact details

_Please contact Kevin Boyle at papershack@gmail.com with any questions_

## Technologies Used

_Angular 2 JS is used predominantly. Angular requires NPM, and this project uses Gulp for asset pipeline management._

### License

*Available for fair use by all under Creative Commons License*

Copyright (c) 2018 **_Kevin Boyle_**
