import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import Modal from 'react-modal';
import Icon from 'react-icons-kit';
import * as actions from './../../actions';

class Modal_cu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      item: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    let data = this.state.item;
    data[event.target.name] = event.target.value;
    this.setState({item: data});
    // console.log(event.target);
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.item.id){
      this.props.upArticle(this.state.item)
    }else {
      // debugger;
      this.props.addArticle(this.state.item)
    }
  }

  componentDidMount(){

    if(this.props.match.params.id){
      this.props.loadArticles(this.props.match.params.id).promise
              .then((res, rej) => {
                this.setState({item: this.props.articles[0]})
              });
    }
  }

  render() {
    // debugger;
    let item = {}
    let content = '';
    if(this.state.item) {
      content = (
        <form method="POST" onSubmit={this.handleSubmit}>
          <input type="hidden" name="id"
            value={this.state.item.id ? this.state.item.id : ''} onChange={this.handleChange} />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label >Название статьи</label>
              <input type="text" className="form-control" name="name"  placeholder=""
                value={this.state.item.name ? this.state.item.name : ''} onChange={this.handleChange}
                />
            </div>
            <div className="form-group col-md-6">
              <label >Alias</label>
              <input type="text" className="form-control" name="alias"  placeholder=""
                value={this.state.item.alias ? this.state.item.alias : ''} onChange={this.handleChange}
                />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label >Преконтент</label>
              <textarea className="form-control"
                name="content_prev"
                onChange={this.handleChange}
                value={this.state.item.content_prev ? this.state.item.content_prev : ''}
                >{this.state.item.content_prev ? this.state.item.content_prev : ''}
              </textarea>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label >Контент</label>
              <textarea className="form-control"
                name="content_full"
                onChange={this.handleChange}
                value={this.state.item.content_full ? this.state.item.content_full : ''}
                >{this.state.item.content_full ? this.state.item.content_full : ''}
              </textarea>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label >Meta_title</label>
              <input type="text" className="form-control" name="meta_title"  placeholder=""
                value={this.state.item.meta_title ? this.state.item.meta_title : ''} onChange={this.handleChange}
                />
            </div>
            <div className="form-group col-md-4">
              <label >Meta_key</label>
              <textarea className="form-control"
                name="meta_key"
                onChange={this.handleChange}
                value={this.state.item.meta_key ? this.state.item.meta_key : ''}
                >{this.state.item.meta_key ? this.state.item.meta_key : ''}
              </textarea>
            </div>
            <div className="form-group col-md-4">
              <label >Meta_desc</label>
              <textarea className="form-control"
                name="meta_desc"
                onChange={this.handleChange}
                value={this.state.item.meta_desc ? this.state.item.meta_desc : ''}
                >{this.state.item.meta_desc ? this.state.item.meta_desc : ''}
              </textarea>
            </div>
          </div>
          <hr/>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      )
    }else{
      content = <h3>Запись не найдена</h3>
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default connect((state) => { return { articles: state.articles } }, actions)(Modal_cu)
