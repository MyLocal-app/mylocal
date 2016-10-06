import React, { Component } from 'react';
import Modal from 'react-modal';
import TaskForm from '../containers/TaskForm';



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
      <div style={{ float: "left", marginLeft: "10px", marginTop: "3px" }}>
        <button onClick={this.openModal}>Add Task</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeM2000} 
          style={{
            content: {
              top: "100px"
            }
          }}>
          <h2 ref="subtitle">Add Task</h2>
          {this.state.modalIsOpen? <TaskForm close={this.closeModal} /> : <br />}
        </Modal>
      </div>
    )
  }
}