import React                  from 'react';
import { browserHistory }     from 'react-router';
import { submitQueryAndType } from '../actions';
import { connect }            from 'react-redux';

class SearchLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      type: ''
    };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onTypeChange(event) {
    this.setState({ type: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.submitQueryAndType(this.state.term, this.state.type);
    browserHistory.push('/search');
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit.bind(this) }>
        <input placeholder="Search" className="inputBox"
          value={ this.state.term }
          onChange={ (this.onInputChange).bind(this) }
        />
        <select className="typeSelect" defaultValue="" onChange={ (this.onTypeChange).bind(this) } required style={{ 'marginLeft': '5px' }}>
          <option disabled value="">- Type -</option>
          <option value="restaurants">Restaurants</option>
          <option value="events">Events</option>
          <option value="tasks">Tasks</option>
          <option value="volunteers">Volunteers</option>
        </select>
        <div></div>
        <button className="btn btn-outline-info btn-main-custom">Next</button>
      </form>
    );
  }
}

export default connect (null, { submitQueryAndType })(SearchLanding);
