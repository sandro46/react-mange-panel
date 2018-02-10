import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from './../../actions';
import moment from 'moment';
import Icon from 'react-icons-kit';
import { pencil2 } from 'react-icons-kit/icomoon/pencil2';
import { cross } from 'react-icons-kit/icomoon/cross';

class Articles extends Component {
  componentDidMount(){
    this.props.loadArticles();
    // debugger;
  }
  render() {
    // debugger;
    return (
      <div className='articles'>
        <div className="alert alert-light" role="alert">
          <h5>Все статьи</h5>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Название</th>
              <th>Преконтент</th>
              <th>Дата создания</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {this.props.articles.map(item =>
              <tr key={item.id}>
                <td >{item.name}</td>
                <td >{item.content_prev}</td>
                <td >{ moment(item.created).format('DD.MM.YYYY HH:mm') }</td>
                <td >
                  <div className="btn-group btn-group-sm" role="group" aria-label="Toolbar for articles">
                    <button type="button" className="btn btn-secondary"><Icon icon={pencil2} /></button>
                    <button type="button" className="btn btn-secondary"><Icon icon={cross} /></button>
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect((state) => { return { articles: state.articles } }, actions)(Articles)
