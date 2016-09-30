import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { searchYelp } from '../actions/SearchYelp';
import { searchEventbrite } from '../actions/EventbriteSearchAction';

class SearchLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      zip: '',
      results: []
    };
  }

  onInputChange(event) {
    console.log('im in onInputChange', event.address_components, event.formatted_address);
    this.setState({
      location: event.formatted_address,
      zip: event.address_components[7].short_name
    });
  }

  onFormSubmit(event) {
    // Tells the browser not to refresh page
    event.preventDefault();
    if (this.props.terms.type === 'restaurant'){
    this.props.searchYelp(this.state.location, this.props.terms.query);

    } else if(this.props.terms.type === 'events'){
      this.props.searchEventbrite(this.props.terms.query, this.state.zip);
    }

  }

  render() {
    console.log('checking props in Search Location', this.props.terms)

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
            return (<div>{restaurant.name}</div>)
          })
        }
      </form>
    );
  }
}

var mapStateToProps = function (state) {
  return {
    terms: state.SearchTerms
  }
}

export default connect (mapStateToProps, { searchYelp, searchEventbrite })(SearchLocation);
