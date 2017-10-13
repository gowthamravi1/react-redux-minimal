import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import users from './users'

// reducres
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  users: users
});

//Reducer static action clsss call definition
export function reducerCall(state, action, reducerClass) {

  //get the action class method
  const [, method] = action.type.split('.');

  //get all calss methods and filter the default methods
  const methods = Object.getOwnPropertyNames(reducerClass).filter(name => {
    if ('length' !== name && 'name' !== name && 'prototype' !== name) {
      return name;
    }
  })

  //check method action exists in static class
  if(methods.find(x => x === method)) {
    const new_state = cloneObject(state)
    //rethen static method
    return reducerClass[method](new_state, action);
  }  else {
    return state
  }
}

//clone object (for another way so keeping seperate)
function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}
