import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import * as actions from './../../actions';
import moment from 'moment';

import Icon from 'react-icons-kit';
import { pencil2 } from 'react-icons-kit/icomoon/pencil2';
import { cross } from 'react-icons-kit/icomoon/cross';
import { ic_clear } from 'react-icons-kit/md/ic_clear';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Articles extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      formData:{
        name: '',
        content_prev: '',
      }
    };

    this.modalContent = '12333333';


    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setModalContentUp = this.setModalContentUp.bind(this);
  }

  handleChange(event) {
    let data = this.state.formData;
    data[event.target.name] = event.target.value;
    this.setState({formData: data});
    // console.log(event.target);
  }

  handleSubmit(event) {
    console.log('submitted: ' + this.state.formData);
    event.preventDefault();
    debugger;
  }

  setModalContentUp(item_id = null) {
    let item = {}
    if(item_id){
      item = this.props.articles.find((el, i) => { return el.id == item_id })
    }
    this.setState({formData: {name: item.name, content_prev: item.content_prev}}, () => { this.openModal(); });
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#fff';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount(){
    this.props.loadArticles();
    // debugger;
  }

  render() {

    let modal = (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <span style={{cursor: 'pointer'}} className="float-right" onClick={this.closeModal}>
          <Icon icon={ic_clear} />
        </span>
        <div>
          <h2 ref={subtitle => this.subtitle = subtitle}>123</h2>
        </div>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.formData.name ? this.state.formData.name : ''} onChange={this.handleChange} />
          </label>
          <label>
            content_prev:
            <input type="text" name="content_prev" value={this.state.formData.content_prev ? this.state.formData.content_prev : ''} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    );

    return (
      <div className='articles'>
        <button onClick={this.openModal}>Open Modal</button>
        {modal}
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
                    <button type="button" className="btn btn-secondary" onClick={this.setModalContentUp.bind(this, item.id)}><Icon icon={pencil2} /></button>
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
