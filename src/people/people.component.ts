import { Component, Input } from '@angular/core';
import { PeopleService } from './people.service';
import { MyPersonComponent } from './person.component';

@Component({
    selector: 'my-people',
    template: `
      <button (click)="getAllPeople()">All</button>
      <button (click)="getActivePeople()">Active</button>
      <button (click)="getInactivePeople()">Inactive</button>
      <ul>
        <li *ngFor="let item of peopleList">
            <my-person [person]="item" (updatePerson)="onUpdatePerson($event)" ></my-person>
        </li>
      </ul>
    `
})
export class MyPeopleComponent {
    @Input() updatePerson; 

    peopleList = [];
    peopleService: PeopleService;

    constructor(peopleService: PeopleService) {
        this.peopleService = peopleService;
    }

    getAllPeople() {
        this.peopleList = this.peopleService.getPeople();
    }
    getActivePeople() {
        this.peopleList = this.peopleService.getActivePeople();
    }
    getInactivePeople() {
        this.peopleList = this.peopleService.getInactivePeople();
    }
    onUpdatePerson(updatedPerson) {
       this.peopleService.updatePerson(updatedPerson);
       console.log(updatedPerson);        
    }
}

