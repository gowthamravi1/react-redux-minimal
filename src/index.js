import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'

//Product Imports
import { reducers } from './reducers/index'
import App from './components/App'
import './stylesheets/main.scss'


//build the use list
let users = [];
 for (var i = 0; i < 10; i++) {
   users.push({
     id: i,
     username: 'AR-' + i,
     job: 'Ex-' + i
   })
 }

const initial_state = {
  users: {
    list: users,
  },
}

//create the store
const store = createStore(reducers, initial_state);


// render main Component
ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>, document.getElementById('app'));
