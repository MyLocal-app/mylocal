import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from '../containers/TaskList';

export default class Tasks extends Component {
  render(){
    //search methods
    return (
      //HTML form: search
      <div>
        <TaskList />
      </div>
    )
  }
}