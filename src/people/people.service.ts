import { Injectable } from '@angular/core';
import { data } from '../data-json';

@Injectable()
export class PeopleService {
    people = [];

    constructor () {
        this.people = data;        
    }

    getPeople() {
        return this.people;
    }

    getActivePeople() {
        return this.getPeople().filter(person => person.isActive === true);        
    }

    getInactivePeople() {
        return this.getPeople().filter(person => person.isActive === false);        
    }

    updatePerson(update) {
        this.people = this.people.map( person => {
            if (person.guid === update.person.guid) {
                person.isActive = !person.isActive;
            }
            return person;
        })
    }
}

