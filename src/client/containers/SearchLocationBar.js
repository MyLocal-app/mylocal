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
      zip: '',
      results: []
    };
  }
  componentWillMount() {
    this.setState({
      location: this.props.defaultLocation.formatted_address || ''
    });
  }

  onInputChange(event) {
    this.setState({
      location: event.formatted_address || event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.props.searchTerms.type === 'restaurants') {
      browserHistory.push(`/search/restaurants?q=${ this.props.searchTerms.query }&location=${ this.state.location }`)
    } else if (this.props.searchTerms.type === 'events') {
      browserHistory.push(`/search/events?q=${ this.props.searchTerms.query }&location=${ this.state.location }`)
    } else if (this.props.searchTerms.type === 'tasks') {
      browserHistory.push(`/search/tasks?q=${ this.props.searchTerms.query }&location=${ this.state.location }`)
    } else if (this.props.searchTerms.type === 'skilled tasker') {
      browserHistory.push(`/search/services?q=${ this.props.searchTerms.query }&location=${ this.state.location }`)
    }

  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit.bind(this) }>
        <Autocomplete
          className="inputBox"
          style={{ 'width': '30%', 'textAlign': 'center' }}
          value={ this.state.location }
          onChange={ (this.onInputChange).bind(this) }
          onPlaceSelected={ (place) => this.onInputChange(place) }
          types={ ['address'] }
          placeholder="Full address"
          required
        />
        <div style={{ 'marginTop':'10px' }}></div>
        <button className="btn btn-outline-info btn-lg btn-main-custom">Submit</button>
        { !this.state.results.length ? '' : this.state.results.map((restaurant) => {
            return (<div>{ restaurant.name }</div>)
          })
        }
      </form>
    );
  }
}

export default connect (null, { searchYelp, searchEventbrite })(SearchLocationBar);
