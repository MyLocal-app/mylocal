import React                from 'react';
import Autocomplete         from 'react-google-autocomplete';
import { browserHistory }   from 'react-router';
import { connect }          from 'react-redux';
import { searchYelp }       from '../actions';
import { searchEventbrite } from '../actions';

class SearchLocationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      userGeometry: '',
      queryGeometry: '',
      zip: '',
      results: []
    };
  }
  componentWillMount() {
    this.setState({
      location: this.props.defaultLocation.formatted_address || '',
      userGeometry: this.props.defaultLocation.geometry || '',
      queryGeometry: ''
    });
  }

  onInputChange(event) {
    this.setState({
      location: event.formatted_address || event.target.value,
      queryGeometry: event.geometry || ''
    });
  }

  onFormSubmit(event) {

    if(this.state.queryGeometry !== ''){
      localStorage.setItem('longitude', this.state.queryGeometry.location.lng())
      localStorage.setItem('latitude', this.state.queryGeometry.location.lat())
    } else {
      localStorage.setItem('longitude', this.state.userGeometry.location.lng)
      localStorage.setItem('latitude', this.state.userGeometry.location.lat)
    }

    event.preventDefault();
    if (this.props.searchTerms.type === 'restaurants') {
      browserHistory.push(`/search/restaurants?q=${ this.props.searchTerms.query }&location=${ this.state.location }`)
    } else if (this.props.searchTerms.type === 'events') {
      browserHistory.push(`/search/events?q=${ this.props.searchTerms.query }&location=${ this.state.location }`)
    } else if (this.props.searchTerms.type === 'tasks') {
      browserHistory.push(`/search/tasks?q=${ this.props.searchTerms.query }&location=${ this.state.location }`)
    } else if (this.props.searchTerms.type === 'skilled tasker') {
      browserHistory.push(`/search/services?q=${ this.props.searchTerms.query }&location=${ this.state.location }`)
    } else if (this.props.searchTerms.type === 'volunteers') {
      browserHistory.push(`/search/volunteers?q=${ this.props.searchTerms.query }&location=${ this.state.location }`)
    }
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit.bind(this) }>
        <Autocomplete
          className="inputBox"
          style={{ 'width': '500px', 'textAlign': 'center' }}
          value={ this.state.location }
          onChange={ (this.onInputChange).bind(this) }
          onPlaceSelected={ (place) => this.onInputChange(place) }
          types={ ['address'] }
          placeholder="Full address"
          required
        />
        <div style={{ 'marginTop':'10px' }}></div>
        <button className="btn btn-info">Submit</button>
        { !this.state.results.length ? '' : this.state.results.map((restaurant) => {
            return (<div>{ restaurant.name }</div>)
          })
        }
      </form>
    );
  }
}

export default connect (null, { searchYelp, searchEventbrite })(SearchLocationBar);
