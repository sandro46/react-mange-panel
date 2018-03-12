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


class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
      val: 'active'
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setMainImg = this.setMainImg.bind(this)
  }

  setMainImg(id, art_id) {
    if(window.confirm('Вы уверены, что хотите сделать эту картинку основной?')) {
      this.props.setImgMain(id, art_id)
    }
  }
  delImg(id) {
    if(window.confirm('Вы уверены, что хотите удвлить картинку?')) {
      this.props.delImg(id)
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = {
      art_id: this.props.match.params.art_id,
      files: this.fileInput.files
    }
    this.props.addImg(data)
    // debugger;
  }

  handleChange(event) {
    let data = this.state.item;
    data[event.target.name] = event.target.value;
    this.setState({item: data});
    // console.log(event.target);
  }

  componentDidMount(){
    this.props.loadGallery(this.props.match.params.art_id);
    // debugger;
  }

  render() {
    return (
      <div>
        <div className="row" style={{marginBottom: '10px'}}>
          <div className="col-md-12">
            <form method="POST" onSubmit={this.handleSubmit}>
              <input type="hidden" name="art_id"
              value={this.state.item.art_id ? this.state.item.art_id : ''} onChange={this.handleChange} />
              <input type="file" name="img"
                ref={input => {
                  this.fileInput = input;
                }} />
              <button type="submit" >Загрузить изображение</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.props.gallery.map((item) =>
              <div key={item.id} className="img">
                <div className='imgPanel'>
                  <div className="btn-group btn-group-sm float-right " role="group" >
                    <button type="button" onClick={this.setMainImg.bind(this, item.id, item.art_id)}
                    className={`btn btn-primary ${item.is_main == 'Y' ? 'active' : ''}`} >Основная</button>
                    <button type="button" className="btn btn-primary " onClick={this.delImg.bind(this, item.id)}  >Удалить</button>
                  </div>
                </div>
                <img src={`http://malina.ru/img/gallery/${item.id}/tumb_${item.name}`} alt={item.name} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

}

export default connect((state) => { return { gallery: state.gallery } }, actions)(Gallery)
