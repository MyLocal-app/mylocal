import React, { Component } from 'react';
import ResultsYelpItem      from './ResultsYelpItem';
import { connect }          from 'react-redux';
import { browserHistory }   from 'react-router';
import { searchYelp }       from '../actions';

class ResultsYelp extends Component {
  componentDidMount() {
    this.props.searchYelp(this.props.location.query.location, this.props.location.query.q + ' restaurant');
  }

  render() {
    return (
      <div className="results">
        <div style={{ "marginTop": "84px" }}></div>
        <h2 className="searchresults-main">Search Results for Restaurants</h2>
        <input placeholder="Filter" className="inputBox filter" />
        <div className="clearfloat"></div>
        { this.props.yelpResults.length === 0 ? <img className="loading" src="https://i.imgur.com/EATfJf4.gif" /> : '' }
        <hr />
        { this.props.yelpResults.map(restaurant => <ResultsYelpItem restaurant={ restaurant } />) }
      </div>
    );
  }
}

var mapStateToProps = function({ yelpResults }) {
  return { yelpResults };
};

export default connect(mapStateToProps, { searchYelp })(ResultsYelp)