import { Component } from '@angular/core';
import { PeopleModule } from '../people/people.module';

@Component({
  selector: 'app',
  template: `
    Hello Extensis.<br/>
    <my-people></my-people>
  `
})
export class AppComponent {}

