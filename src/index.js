import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom'
import { createStore , applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, browserHistory } from 'history';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga'

//Product Imports
import { reducers } from './reducers/index';
import App from './components/App';
import UserEdit from './pages/UserEdit';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { sagas } from './sagas/index';
import './stylesheets/main.scss';

const sagaMiddleware = createSagaMiddleware();

//create the store
let middleware = applyMiddleware(routerMiddleware(browserHistory), sagaMiddleware);

if (process.env.NODE_ENV !== 'production' ) {
  middleware =  composeWithDevTools(middleware);
}

const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(createBrowserHistory(), store);
sagaMiddleware.run(sagas);
// render main Component
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('app'));
