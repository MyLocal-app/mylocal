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
    // this.refs.subtitle.style.color = '#ff0000';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render(){
    return (
      <span>
        <a className="dropdown-item" onClick={this.openModal}>Add Task</a>
        <Modal
          isOpen={ this.state.modalIsOpen }
          onAfterOpen={ this.afterOpenModal }
          onRequestClose={ this.closeM2000 }
          style={{ content: { top: "100px", color: "black" }
          }}>
          <h2 className="addTask" style={{color: '#00a4d3'}}>Add Task</h2>
          <hr />
          {this.state.modalIsOpen ? <TaskForm close={this.closeModal} /> : <br />}
        </Modal>
      </span>
    )
  }
}