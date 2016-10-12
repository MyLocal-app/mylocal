import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getTasks, doTask } from '../actions';
import TaskListItem from './TaskListItem';

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.searchChange = this.searchChange.bind(this);
    this.handleDoTask = this.handleDoTask.bind(this);
  }
  componentWillMount() {
    var longitude = localStorage.getItem('longitude')
    var latitude = localStorage.getItem('latitude')
    this.props.getTasks(this.props.location.query.q, [longitude, latitude]);
  }

  componentWillReceiveProps(nextprops) {
    console.log(nextprops)
    this.setState({
      search: nextprops.searchTerms.query
    });
  }

  searchChange(e) {
    console.log(e.target.value)
    this.setState({
      search: e.target.value
    })
  }

  handleDoTask(e) {
    console.log(e.target.value) //task id
    var longitude = localStorage.getItem('longitude')
    var latitude = localStorage.getItem('latitude')
    this.props.doTask(e.target.value, [longitude, latitude])
  }

  render(){
    const DOTASK = this.handleDoTask;
    return (
      <div className="results">
        <div style={{ marginTop: "100px" }} ></div>
        <h1 className="searchresults-main" >Search Results for Tasks</h1>
        <form>
          <input type="text" placeholder="Filter" style={{float: "right", marginRight: "100px"}} onChange={this.searchChange} value={this.state.search} />
        </form>
        <div className="clearfloat"></div>

        { this.props.tasks.filter((taskData) => {
          return taskData.title.toUpperCase().includes(this.state.search.toUpperCase()) || taskData.description.toUpperCase().includes(this.state.search.toUpperCase()) ||
            taskData.category.toUpperCase().includes(this.state.search.toUpperCase())
        }).map(function(taskData) {
          return <TaskListItem task={ taskData } handler={ DOTASK.bind(this) } />
        })}
      </div>
    )
  }
}

var mapStateToProps = function ({ tasks, searchTerms }) {
  return { tasks, searchTerms }
};

export default connect (mapStateToProps, { getTasks, doTask })(TaskList);
