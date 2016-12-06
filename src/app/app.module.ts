import { NgModule } from '@angular/core';
import { PeopleModule } from '../people/people.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ 
    AppComponent 
    ],
   exports: [
    PeopleModule    
  ],
  imports: [
      PeopleModule
  ]
})

export class AppModule{};
