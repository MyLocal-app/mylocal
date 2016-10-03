import React, { Component } from 'react';
import { connect } from 'react-redux';

class YelpResults extends Component {
  render() {
    return (
      <div className="results">
        <h2 className="searchresults-main">Search Results for Restaurants</h2>
        <input placeholder="Filter" className="inputBox filter" />
        <div className="clearfloat"></div>
        {this.props.YelpResults.length === 0 ? <img className="loading" src="https://i.imgur.com/EATfJf4.gif" /> : '' }
        <hr />
        { this.props.YelpResults.map(function (restaurant) {
          return (
            <div className="result" key={ restaurant.id }>
              <div className="row">
                <div className="col-md-3">
                  <img src={ !!restaurant.image_url ? restaurant.image_url : "http://resources.ennect.com/_images/application/event/no-selected-image-placeholder-large.gif" } alt="" className="result-img img-fluid" style={{ 'width': '100%' }} />
                  <button style={{ 'width': '100%' }} className="btn btn-info btn-main-custom">More Info</button>
                  <button style={{ 'width': '100%' }} className="btn btn-outline-info btn-main-custom">Reviews</button>
                </div>
                <div className="col-md-9">
                  <h3 style={{"marginTop":"20px"}}>{ restaurant.name }</h3>
                  <i className={ `material-icons star-rating ${ Math.round(restaurant.rating) >= 1 ? 'star-on' : '' }` }>star</i>
                  <i className={ `material-icons star-rating ${ Math.round(restaurant.rating) >= 2 ? 'star-on' : '' }` }>star</i>
                  <i className={ `material-icons star-rating ${ Math.round(restaurant.rating) >= 3 ? 'star-on' : '' }` }>star</i>
                  <i className={ `material-icons star-rating ${ Math.round(restaurant.rating) >= 4 ? 'star-on' : '' }` }>star</i>
                  <i className={ `material-icons star-rating ${ Math.round(restaurant.rating) >= 5 ? 'star-on' : '' }` }>star</i>
                  <div style={{"marginTop":"5px"}}></div>
                  <i className="material-icons locationPointer">location_on</i>
                  { restaurant.location.display_address.join(', ')}
                  <hr />
                  <h4>Review Snippet</h4>
                  <p className="desc">{ restaurant.snippet_text }</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

var mapStateToProps = function(state) {
  return {
    YelpResults: state.YelpResults
  }
}
export default connect(mapStateToProps)(YelpResults)