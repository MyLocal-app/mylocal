import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { searchYelp } from '../actions';
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

  onInputChange(event) {
    this.setState({
      location: event.formatted_address,
      zip: event.address_components[7].short_name
    });
  }

  onFormSubmit(event) {
    // Tells the browser not to refresh page
    event.preventDefault();
    if (this.props.searchTerms.type === 'restaurant') {
    this.props.searchYelp(this.state.location, this.props.searchTerms.query);
    } else if(this.props.searchTerms.type === 'events') {
      this.props.searchEventbrite(this.props.searchTerms.query, this.state.zip);
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

var mapStateToProps = function ({ searchTerms }) {
  return { searchTerms }
}

export default connect (mapStateToProps, { searchYelp, searchEventbrite })(SearchLocationBar);
