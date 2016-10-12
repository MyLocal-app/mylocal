import React, { Component }             from 'react';
import { connect }                      from 'react-redux';
import { getUserTasks, fetchLocalUser } from '../actions';
import UserTask                         from '../components/UserTask'

class ReviewTasks extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    };
  }

  componentWillMount() {
    if (localStorage.getItem('token')) {
      this.props.getUserTasks(localStorage.getItem('token'));
    }
    this.props.fetchLocalUser(localStorage.getItem('token'));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      email: nextProps.localUser.email
    })
  }

  render() {
    return (
      <div>
      <nav className="nav nav-inline settings-bar">
        <a className="nav-link" href="#">General Settings</a>
        <a className="nav-link" href="/account/tasks">My Tasks</a>
        <a className="nav-link" href={ `/user/${ this.state.email }` }>Public Profile</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link" href="#">Link</a>
      </nav>

        <div style={{ "marginTop":"132px" }}></div>

        <div className="results">
          <h2 className="searchresults-main">My Tasks</h2>
          <input placeholder="Filter" className="inputBox filter" />
          <div className="clearfloat"></div>
          { this.props.tasks.length === 0 ? <p>No Tasks</p> : '' }
          <hr />
          { this.props.tasks.map(task => {
            return (
              <UserTask task={task}/>
            )
          }) }
        </div>
      </div>
    )
  }
}

var mapStateToProps = function({ tasks, localUser }) {
  return { tasks, localUser };
};

export default connect(mapStateToProps, { getUserTasks, fetchLocalUser })(ReviewTasks);