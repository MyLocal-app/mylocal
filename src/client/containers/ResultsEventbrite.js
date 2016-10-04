import React, { Component } from 'react';
import { connect }          from 'react-redux';

class ResultsEventbrite extends Component {
  render() {
    return (
      <div className="results">
      <div style={{ marginTop:'87px' }}> </div>
      <h2 className="searchresults-main">
      { this.props.eventbriteResults.length === 0 ? "Searching for Events" : "Search Results for Restaurants" }</h2>
      <input placeholder="Filter" className="inputBox filter" />
      <div className="clearfloat"></div>
      { this.props.eventbriteResults.length === 0 ? <img className="loading" src="https://i.imgur.com/EATfJf4.gif" /> : <div></div> }
      <hr />
      { this.props.eventbriteResults.map(function (eventData) {
        return (
          <div className="result" key={eventData.id}>
            <div className="row">
              <div className="col-md-3">
                <img src={ !!eventData.logo ? eventData.logo.url : "http://resources.ennect.com/_images/application/event/no-selected-image-placeholder-large.gif" } alt="" className="result-img img-fluid" style={{ width: '100%'}} />
                <a href={ eventData.url }>
                <button style={{ width: '100%' }} className="btn btn-info btn-main-custom">More Info</button>
                </a>
              </div>
              <div className="col-md-9">
                <h3 style={{ marginTop: '20px' }}>{ eventData.name.text }</h3>
                <div style={{ marginTop: '5px' }}></div>
                <hr />
                <h4>Description</h4>
                <p className="desc">{ eventData.description.text }</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    )
  }
}

function mapStateToProps({ eventbriteResults }) {
  return { eventbriteResults }
};

export default connect(mapStateToProps)(ResultsEventbrite)