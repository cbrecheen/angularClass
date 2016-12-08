import './polyfills.browser';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { Route, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { Store } from './shared/store.service';
import { MyPeopleComponent } from './people/people.component';
import { MyPersonComponent } from './people/person.component';

var routes: Route[] = [
  {
    path: '',
    component: MyPeopleComponent
  },
  {
    path: 'person/:guid',
    component: MyPersonComponent,
    // children: [
    //   {
    //     path: '',
    //     component: MyPersonComponent
    //   }
    // ]
  }
]
@NgModule({
  bootstrap: [AppComponent],
  providers: [
    Store
  ],
  imports: [
    BrowserModule,
    AppModule,
//    RouterModule.forRoot(routes)
  ],
  exports: [
//    RouterModule
  ]
})
class MainModule {}

var platform = platformBrowserDynamic();

platform.bootstrapModule(MainModule);