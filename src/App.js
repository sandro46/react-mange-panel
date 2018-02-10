import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import CarList from './components/ul';
import Menu from './components/menu';
import { withRouter, history} from 'react-router-dom'
import './css/bootstrap.min.css'




class App extends Component {
  hClick () {
    this.props.loadCars();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="row col-md-12">
          <div className='col-md-3'>
            <Menu />
          </div>
          <div className='col-md-9 main'>
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

// <button onClick={this.hClick.bind(this)} >Load cars</button>
// counter is: {this.props.counter}
// <CarList />
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>

function mapStateToProps(state) {
  return {
    counter: state.counter,
    cars: state.cars
  }
}

export default withRouter(connect(mapStateToProps, actions)(App))

// export default connect( mapStateToProps, actions)(App);
// export default (App);
