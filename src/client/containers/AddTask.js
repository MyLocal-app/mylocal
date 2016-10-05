import React, { Component } from 'react';
import Modal from 'react-modal';
import TaskForm from './TaskForm'

export default class AddTask extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      modalIsOpen: false
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
    this.refs.subtitle.style.color = '#ff0000';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  

  // onModalSubmit() {
  //   this.
  // }

  render(){
    return (
      <div>
      <div style={{ 'marginTop':'300px' }}></div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeM2000} >
 
          <h2 ref="subtitle">Hello</h2>
          <div>I am a modal</div>
          <button onClick={this.closeModal}>close</button>
          {this.state.modalIsOpen? <TaskForm /> : <br />}
        </Modal>
      </div>
    )
  }
}