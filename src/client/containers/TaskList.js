import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getTasks }         from '../actions';

class TaskList extends Component {
  componentWillMount() {
    getTasks();
  }

  render(){
    // this.props.getTasks();
    return (
      <div>
      <div style={{marginTop: "170px"}} ></div>
      { this.props.tasks.map(function (taskData) {
        return (
          <div className="result" key={taskData._id}>
            <div className="row">
              <div className="col-md-3">
                <img src="http://resources.ennect.com/_images/application/event/no-selected-image-placeholder-large.gif" alt="" className="result-img img-fluid" style={{ width: '100%'}} />
              </div>
              <div className="col-md-9">
                <h3 style={{ marginTop: '20px' }}>{ taskData.title }</h3>
                <div style={{ marginTop: '5px' }}></div>
                <hr />
                <h4>Description</h4>
                <p className="desc">{ taskData.description }</p>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    )
  }
}

var mapStateToProps = function ({ tasks }) {
  console.log('wait what?', tasks);
  return { tasks }
};

export default connect (mapStateToProps, getTasks)(TaskList);
