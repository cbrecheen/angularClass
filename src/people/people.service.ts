import { Injectable } from '@angular/core';
import { data } from '../data-json';
import { Store } from '../shared/store.service';

@Injectable()
export class PeopleService {

    constructor (public store: Store) {
        store.update('people', data);   
    }

    getPeople() {
        console.log("getPeople() returning: " + this.store.getCurrentState().people);
        return this.store.getCurrentState().people;
    }

    getActivePeople() {
        
        return this.getPeople().filter(person => person.isActive === true);        
    }

    getInactivePeople() {
        return this.getPeople().filter(person => person.isActive === false);        
    }

    updatePerson(update) {
        // this.people = this.people.map( person => {
        //     if (person.guid === update.person.guid) {
        //         person.isActive = !person.isActive;
        //     }
        //     return person;
        // })
    }
}

