import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import NotFound from './NotFound'
import Articles from './articles'

class Main extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/articles' component={Articles}/>
          <Route path='/about' component={About}/>
          <Route component={NotFound}/>
        </Switch>
    )
  }
}

export default Main;
