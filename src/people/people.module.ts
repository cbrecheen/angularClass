import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleService } from './people.service';
import { MyPeopleComponent } from './people.component';
import { MyPersonComponent } from './person.component';

@NgModule({
  declarations: [ 
    MyPeopleComponent,
    MyPersonComponent 
    ],
  imports: [
    CommonModule
  ],
  exports: [
    MyPeopleComponent,
    MyPersonComponent    
  ],
  providers: [
    PeopleService
  ]
})

export class PeopleModule{};
