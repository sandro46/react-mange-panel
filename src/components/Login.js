import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import * as actions from './../actions';
import moment from 'moment';
import { Redirect } from 'react-router-dom'
import Main from './main';

import {Link, location} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    if(!this.state.item.name || !this.state.item.pass) {
      alert('Введены не все данные');
      return
    }
    this.props.authUser(this.state.item.name, this.state.item.pass)
  }

  handleChange(event) {
    let data = this.state.item;
    data[event.target.name] = event.target.value;
    this.setState({item: data});
  }


  render() {
    // debugger;
    return (
        <div className="login">
          <h1>Вход</h1>
          <form method="POST" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label >Пользователь</label>
                <input type="text" className="form-control" name="name"  placeholder=""
                  value={this.state.item.name ? this.state.item.name : ''} onChange={this.handleChange}
                  />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label >Пароль</label>
                <input type="password" className="form-control" name="pass"  placeholder=""
                  value={this.state.item.pass ? this.state.item.pass : ''} onChange={this.handleChange}
                  />
              </div>
            </div>
            <button type="submit" >Войти</button>
          </form>
        </div>
    );
  }
}

export default connect((state) => { return { user: state.user } }, actions)(Login)
