import React, { Component } from 'react';
import ReviewTask           from './ReviewTask'
import GoogleMap from '../components/GoogleMap';
import { browserHistory } from 'react-router';

export default class UserTask extends Component {
  onNameClick() {
    browserHistory.push(`/user/${ this.props.task.assignedTo }`);
  }

  render() {
    const { lng, lat } = this.props.task.location.geometry.location;
    return (
      <div className="result" key={this.props.task._id}>
        <div className="row">
          <div className="col-md-3">
            <GoogleMap lon={lng} lat={lat} />
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
                <tr><td>{ this.props.task.volunteer ? 'Volunteer' : "Paid" }</td><td>{ this.props.task.volunteer ? "" : "Yes" }</td></tr>
                <tr><td>Assigned To: </td><td className="cursor" onClick={ this.onNameClick.bind(this) }>{ this.props.task.assignedTo ? this.props.task.assignedTo : 'No One' }</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
