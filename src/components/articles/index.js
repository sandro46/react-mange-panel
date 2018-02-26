import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import * as actions from './../../actions';
import moment from 'moment';

import {Link} from 'react-router-dom';
import Icon from 'react-icons-kit';
import { pencil2 } from 'react-icons-kit/icomoon/pencil2';
import { cross } from 'react-icons-kit/icomoon/cross';
import { ic_clear } from 'react-icons-kit/md/ic_clear';
import { images } from 'react-icons-kit/icomoon/images';
import Test from './test';

class Articles extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      modalIsOpen2: false,
      modalHeader: '',
      formData:{
      }
    };

    this.delArticle = this.delArticle.bind(this);
  }


  delArticle(id) {
    console.log(this.props.delArticle(id));
  }

  handleChangeFile(event) {
    let data = this.state.formData;
    data['files'] = event.target.files;
    this.setState({formData: data});
  }

  setModalContentUp(item_id = null) {
    let item = {}
    if(item_id){
      item = this.props.articles.find((el, i) => { return el.id == item_id })
    }
    this.setState({formData: item, modalHeader: 'Редактирование записи'}, () => { this.openModal(); console.log(this.state); });
  }

  componentDidMount(){
    this.props.loadArticles();
    // debugger;
  }

  render() {
    // debugger;
    return (
      <div className='articles'>
        <Test modalIsOpen={this.props.modalIsOpen2} />
        <div className="alert alert-light" role="alert">
          <h5>Все статьи</h5>
        </div>
        <div>
          <Link className="btn btn-success" to={'/edit_articles/'} >Добавить</Link>
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
                    <Link className="btn btn-secondary" to={'/gallery/'+item.id} >
                      <Icon icon={images} />
                    </Link>
                    <Link className="btn btn-secondary" to={'/edit_articles/'+item.id} >
                      <Icon icon={pencil2} />
                    </Link>
                    <button type="button" className="btn btn-secondary">
                        <Icon icon={cross} onClick={this.delArticle.bind(this, item.id)} />
                    </button>
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
