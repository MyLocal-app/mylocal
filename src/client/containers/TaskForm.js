import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { connect }          from 'react-redux';
import { addTask }       from '../actions';

class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: {}
    };
    this.state.task = {
      title: '',
      description: '',
      category: '',
      hours: '',
      volunteer: false,
      dollarValue: '',
      location: '',
      image: '', //URL?
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onVolunteerChange = this.onVolunteerChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onVolunteerChange(event) {
    const task = this.state.task;
    task.volunteer = !this.state.task.volunteer;
    this.setState({
      task: task,
      location: this.state.location
    });

  }

  onInputChange(event) {
    const task = this.state.task;
    task[event.target.name] = event.target.value;
    this.setState({
      task: task,
      location: this.state.location
    })
  }

  onLocationChange(locObj) {
    const task = this.state.task;
    task.location = locObj.formatted_address;
    this.setState({
      location: locObj,
      task: task
    });

  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.close();
    this.props.addTask( this.state.task, this.state.location);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} style={{width:"50%", margin:"0 auto"}}>
        <div className={"form-column"}>
        <label>Title</label>
        <input
          className="inputBox"
          type="text"
          name="title"
          onChange={this.onInputChange}
          value={this.state.task.title}
        />
        <label>Description</label>
        <textarea
          className="inputBox"
          type="text"
          name="description"
          onChange={this.onInputChange}
          value={this.state.task.description}
        />
        <label>Category</label>
        <input
          className="inputBox"
          type="text"
          name="category"
          onChange={this.onInputChange}
          value={this.state.task.category}
        />
        <label>Hours</label>
        <input
          className="inputBox"
          type="number"
          name="hours"
          onChange={this.onInputChange}
          value={this.state.task.hours}
        />
        </div>
        <div className={"form-column"}>
        <label>Volunteer</label>
        <input
          className="inputBox"
          type="checkbox"
          name="volunteer"
          onChange={this.onVolunteerChange} //This change handler is different
          value={this.state.task.volunteer}
        />
        <label>Dollar Value</label>
        <input
          className="inputBox"
          type="number"
          min="1"
          step=".01"
          name="dollarValue"
          onChange={this.onInputChange}
          value={this.state.task.dollarValue}
        />
        <label>Location</label>
        <Autocomplete
          className="inputBox"
          type="text"
          types={ ['address'] }
          name="location"
          onChange={this.onInputChange}
          onPlaceSelected={this.onLocationChange}
          value={this.state.task.location}
        />
        <button action="submit" >Submit</button>
        </div>
      </form>

    )
  }
}


export default connect(null, { addTask })(TaskForm);