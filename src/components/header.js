import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-sm navbar navbar-dark bg-dark justify-content-between headline">
          <Link className="nav navbar-nav navbar-left navbar-brand" to='/'>ALINA</Link>
          <a href="http://articles.fortawesome.com"><i className="fa fa-external-link"></i> Выход</a>
      </div>
    )
  }
}

export default Header;
