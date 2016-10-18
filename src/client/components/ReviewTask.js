import React, { Component } from 'react';
import Modal from 'react-modal';
import ReviewForm from '../containers/ReviewForm';

export default class ReviewTask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      submitted: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.refs.subtitle.style.color = '#ff0000';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render(){
    return (
      <span>
        <a onClick={this.openModal}><button style={{ width: '100%', marginTop: "20px" }} className="btn btn-info">Review Task</button></a>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onAfterOpen={ this.afterOpenModal }
          onRequestClose={ this.closeM2000 }
          style={{
            content: {
              top: "140px",
              color: "black"
            }
          }}>
          <h2 style={{color: '#00a4d3'}}>Review Task</h2>
          {this.state.modalIsOpen ? <ReviewForm close={this.closeModal} servicePerson={this.props.assignedTo} /> : <br />}
        </Modal>
      </span>
    )
  }
}
