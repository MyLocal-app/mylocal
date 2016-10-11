import React, { Component } from 'react';
import ReviewTask           from './ReviewTask'

export default class UserTask extends Component {
  render() {
    return (
        <div className="result" key={this.props.task._id}>
          <div className="row">
            <div className="col-md-3">
              <img src="/img/howto-banner.jpg" alt="" className="result-img img-fluid" />
              
              <ReviewTask assignedTo={this.props.task.assignedTo}/>
              
            </div>
            <div className="col-md-9">
              <h3 style={{ marginTop: '20px', color: '#00a4d3' }}>{ this.props.task.title }</h3>
              <div style={{ marginTop: '5px' }}></div>
              <hr />
            </div>
            <div className="col-md-6">
              <h4>Description</h4>
              <p >{ this.props.task.description }</p>
            </div>
            <div className="col-md-3">
              <h4>Details</h4>
              <table>
                <tbody>
                  <tr><td>Category: </td><td>{this.props.task.category}</td></tr>
                  <tr><td>Status: </td><td>{ this.props.task.completed ? String.fromCharCode(10004): String.fromCharCode(10008) }</td></tr>
                  <tr><td>Paid: </td><td>{ this.props.task.volunteer ? "No" : "Yes" }</td></tr>
                  <tr><td>{this.props.task.assignedTo}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
  }
}

