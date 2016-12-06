import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-person',
    template: `
        <input type="checkbox" [checked]="person.isActive" (change)="changeActivationState($event.target.checked)" /> {{person.name}}
    `
})
export class MyPersonComponent {
    @Input() person;
    @Output() updatePerson = new EventEmitter();

    constructor() {
        
    }

    changeActivationState(state) {
        let updated = {
            isActive: state,
            person: this.person
        };
        this.updatePerson.emit(updated);
    }

}

