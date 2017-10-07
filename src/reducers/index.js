import { combineReducers } from 'redux'

import users from './users'


export const reducers = combineReducers({
  users: users
});

// export function reducers(state, action) {
//
//   // no action so retuen default state
//
//   return state
// }
