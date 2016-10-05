import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

export default class Tasks extends Component {
  render(){
    //search methods
    return (
      //HTML form: search
      <div>
        <AddTask />
        <TaskList />
      </div>
    )
  }
}