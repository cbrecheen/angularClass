import './polyfills.browser';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { PeopleService } from './people/people.service';
import { MyPeopleComponent } from './people/people.component';
import { MyPersonComponent } from './people/person.component';

@Component({
  selector: 'app',
  template: `
    Hello Extensis.<br/>
    <my-people></my-people>
  `
})
class AppComponent{}
@NgModule({
  bootstrap: [AppComponent],
  declarations: [ 
    AppComponent,
    MyPeopleComponent,
    MyPersonComponent ],
  imports: [
    BrowserModule
  ],
  providers: [
    PeopleService
  ]
})
class MainModule {}

var platform = platformBrowserDynamic();

platform.bootstrapModule(MainModule);