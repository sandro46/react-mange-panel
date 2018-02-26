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
      item: {}
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    )
  }

}

export default connect((state) => { return { gallery: state.gallery } }, actions)(Gallery)
