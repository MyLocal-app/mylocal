import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux'

class SearchLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      results: []
    };
  }

  onInputChange(event) {
    this.setState({ location: event.formatted_address });
  }

  onFormSubmit(event) {
    // Tells the browser not to refresh page
    event.preventDefault();
    $.get(`/search/restaurants?location=${ this.state.location }&term=restaurant`)
    .done(function(response) {
      this.setState({ 'results':response.businesses });
    }.bind(this));
  }

  render() {
    console.log('checking props in SearchLocation.js', this.props.terms);    
    return (
      <form onSubmit={ this.onFormSubmit.bind(this) }>
        <Autocomplete
          className="inputBox"
          style={{ 'width': '30%', 'textAlign': 'center' }}
          value={ this.state.location }
          onChange={ (this.onInputChange).bind(this) }
          onPlaceSelected={ (place) => this.onInputChange(place) }
          types={ ['address'] }
          required
        />
        <div style={{ 'marginTop':'10px' }}></div>
        <button className="btn btn-outline-info btn-lg btn-main-custom">Submit</button>
        { !this.state.results.length ? '' : this.state.results.map((restaurant) => {
            return (<div>{restaurant.name}</div>)
          })
        }
      </form>
    );
  }
}

mapStateToProps(state) {
  return {
    terms: state.searchTerms
  }
}

export default connect (mapStateToProps)(SearchLocation);
