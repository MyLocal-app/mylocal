import React, { Component }  from 'react';
import ResultsEventbriteItem from './ResultsEventbriteItem';
import { connect }           from 'react-redux';
import { searchEventbrite }  from '../actions';

class ResultsEventbrite extends Component {
  componentWillMount() {
    this.props.searchEventbrite(this.props.location.query.q, this.props.location.query.location)
  }
  render() {
    return (
      <div className="results">
        <div style={{ marginTop:'87px' }}> </div>
        <h2 className="searchresults-main">
        { this.props.eventbriteResults.length === 0 ? "Searching for Events" : "Search Results for Events" }</h2>
        <input placeholder="Filter" className="inputBox filter" />
        <div className="clearfloat"></div>
        { this.props.eventbriteResults.length === 0 ? <img className="loading" src="https://i.imgur.com/EATfJf4.gif" /> : <div></div> }
        <hr />
        { this.props.eventbriteResults.map(eventData => <ResultsEventbriteItem eventData={ eventData } />) }
      </div>
    )
  }
}

function mapStateToProps({ eventbriteResults }) {
  return { eventbriteResults }
};

export default connect(mapStateToProps, { searchEventbrite })(ResultsEventbrite)