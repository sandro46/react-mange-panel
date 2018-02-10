import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import { parseQueryParams } from './../lib';

// debugger;

class Menu extends Component {
  parseQueryParams(query) {
    //You get a '?key=asdfghjkl1234567890&val=123&val2&val3=other'
    if(query == '') return '';
    const queryArray = query.split('?')[1].split('&');
    let queryParams = {};
    for (let i = 0; i < queryArray.length; i++) {
      const [key, val] = queryArray[i].split('=');
      queryParams[key] = val ? val : true;
    }
    /* queryParams =
       {
        key:"asdfghjkl1234567890",
        val:"123",
        val2:true,
        val3:"other"
       }
    */
    return queryParams;
  }

  parsePath(query = window.location.pathname) {
    return query.split('/').splice(1);
  }

  render() {
    // console.log(this.parsePath());
    return (
      <div className='list-group'>
        <Link className={this.parsePath()[0] == 'articles' ?
              'list-group-item list-group-item-action active' :
              'list-group-item list-group-item-action'} to='/articles'>Статьи</Link>
        <Link className={this.parsePath()[0] == 'about' ?
              'list-group-item list-group-item-action active' :
              'list-group-item list-group-item-action'} to='/about'>about</Link>
        <Link className={this.parsePath()[0] == 'about1' ?
              'list-group-item list-group-item-action active' :
              'list-group-item list-group-item-action'} to='/about1'>about1</Link>
      </div>
    )
  }
}

export default Menu;
