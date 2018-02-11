import React from 'react';
import ReactDOM from 'react-dom';
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

class Modal_cu extends React.Component {
  constructor() {
    super();

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
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
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
  }
}

export default Modal_cu;
