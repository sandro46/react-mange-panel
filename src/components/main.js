import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import NotFound from './NotFound'
import Articles from './articles'
import Modal_cu from './articles/modal_cu'
import Gallery from './gallery'

class Main extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/articles' component={Articles}/>
          <Route path='/about' component={About}/>
          <Route path="/edit_articles/:id" component={Modal_cu}/>
          <Route path="/edit_articles" component={Modal_cu}/>
          <Route path="/gallery/:art_id" component={Gallery}/>
          <Route component={NotFound}/>
        </Switch>
    )
  }
}

export default Main;
