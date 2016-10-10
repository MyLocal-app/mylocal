import React, { Component } from 'react';
import axios                from 'axios';
import { saveFavorites }    from '../actions';
import { updateFavorites }  from '../actions';
import { connect       }    from 'react-redux';

class ResultsEventbriteItem extends Component {
  removeFavorite() {
    if (localStorage.getItem('token')) {
      this.props.updateFavorites(this.props.favorites, 'event', this.props.eventData.id)
      this.props.saveFavorites(localStorage.getItem('token'), 'event', this.props.eventData, false)
    }
  }

  render() {
    return (
      <div className="result" key={ this.props.eventData.id }>
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <img src={ !!this.props.eventData.logo ? this.props.eventData.logo.url : "http://resources.ennect.com/_images/application/event/no-selected-image-placeholder-large.gif" } alt="" className="result-img img-fluid" style={{ width: '100%'}} />
            <a href={ this.props.eventData.url }>
              <button style={{ width: '100%' }} className="btn btn-info btn-more-info">More Info</button>
            </a>
          </div>
          <div className="col-xl-8 col-lg-7">
            <h3 style={{ marginTop: '20px' }}>{ this.props.eventData.name.text }</h3>
            <div style={{ marginTop: '5px' }}></div>
            <hr />
            <h4>Description</h4>
            <p className="desc">{ this.props.eventData.description.text }</p>
          </div>
          <div className="col-md-1 text-xs-right">
            <a className="cursor">
              <span title="Click to remove from favorites">
                <i className='material-icons favorite favorite-on' 
                   onClick={ this.removeFavorite.bind(this) }>favorite
                </i>
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { saveFavorites, updateFavorites })(ResultsEventbriteItem)