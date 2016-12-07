import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface AppState {
  people: Array<any>;
};

var _defaultValue: AppState = {
  people: []
};

var _store = new BehaviorSubject(_defaultValue);


@Injectable()
export class Store {
  changes = _store.asObservable().do(value => console.log('new state with value: ', value));

  getCurrentState () {
    return _store.value;
  }

  get ( property ) {
    return _store.value[property];
  }

  update ( property, value ) {
    var currentState = _store.value;
    currentState[property] = value;

    _store.next(currentState);
  }

}