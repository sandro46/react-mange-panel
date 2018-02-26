import React, { Component } from 'react';
import Icon from 'react-icons-kit';
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

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#343a3d80';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    // debugger
    return (
        <Modal
          isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <button ></button>
        <h2 ref={subtitle => this.subtitle = subtitle}>{this.state.modalHeader}</h2>
        </Modal>
    )
  }
}

export default Test;
