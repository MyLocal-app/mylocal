import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';

export default class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: {}
    };
    this.state.task = {
      title: '',
      description: '',
      category: '',
      hours: null,
      volunteer: true,
      dollarValue: null,
      location: '', 
      image: '', //URL?
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onVolunteerChange = this.onVolunteerChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
  }

  onVolunteerChange(event) {
    this.setState({
      task: {
        volunteer: !this.state.task.volunteer
      }
    });
    // console.log(this.state.task.volunteer)
  }

  onInputChange(event) {
    const task = this.state.task;
    task[event.target.name] = event.target.value;
    this.setState({task: task });
    // console.log(this.state.task);
  }

  onLocationChange(locObj) {
    this.setState({
      location: locObj,
      task: {
        location: locObj.formatted_address
      }
    });
    console.log('location change',this.state.location, this.state.task.location)
  }

  render() {
    return (
      <form>
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
        <button>Submit</button>
      </form>

    )
  }
}