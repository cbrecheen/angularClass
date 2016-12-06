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
        let i = this.people.indexOf(update.person);
        this.people[i].isActive = update.isActive;

        //  TODO: we know we should use map, but we couldn't get this to work.
        // this.people = this.people.map(person => {
        //     console.log(person, update);
        //    if (person.guid === update.person.guid) {
        //        person.isActive = !person.isActive;
        //    }
        // }) 
    }
}

