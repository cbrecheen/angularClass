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
    state: string = "all";

    peopleList = [];
    peopleService: PeopleService;

    constructor(peopleService: PeopleService) {
        this.peopleService = peopleService;
    }

    getAllPeople() {
        this.state = "all";
        this.peopleList = this.peopleService.getPeople();
    }
    getActivePeople() {
        this.state = "active";
        this.peopleList = this.peopleService.getActivePeople();
    }
    getInactivePeople() {
        this.state = "inactive";
        this.peopleList = this.peopleService.getInactivePeople();
    }
    onUpdatePerson(updatedPerson) {
        this.peopleService.updatePerson(updatedPerson);
        console.log(updatedPerson);
        switch (this.state)
        {
        case "all":
            this.getAllPeople();
            break;        
        case "active":
            this.getActivePeople();
            break;
        case "inactive":
            this.getInactivePeople();
            break;

        }        
    }
}

