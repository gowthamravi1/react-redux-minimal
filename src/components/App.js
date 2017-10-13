import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Menu from './Menu';
import Home from '../pages/Home';
import UserEdit from '../pages/UserEdit';
import NotFound from '../pages/NotFound';

export default class App extends React.Component {

  render() {


    const Main = () => (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/user-edit/:id?" component={UserEdit} />
          <Route component={NotFound} />
        </Switch>
      </main>
    )

    return (
      <div className="container">
        <div className="row">
          <Menu/>
        </div>
        <div className="row">
          <Main />
        </div>
      </div>
    );
  }
}
