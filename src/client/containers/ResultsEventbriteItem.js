import React, { Component } from 'react';
import axios                from 'axios';
import { saveFavorites }    from '../actions';
import { connect }          from 'react-redux';

class ResultsEventbriteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnFavorite: false
    };
  }

  toggleHeart() {
    // setState does not change the value quick enough so creating another variable to use for sending via axios
    var btnFavoriteToggle = !this.state.btnFavorite;
    this.setState({
      btnFavorite: btnFavoriteToggle
    });
  if (localStorage.getItem('token')) {
      this.props.saveFavorites(localStorage.getItem('token'), 'event', this.props.eventData, btnFavoriteToggle)
    }
  }

  render() {
    return (
      <div className="result" key={ this.props.eventData.id }>
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <img src={ !!this.props.eventData.logo ? this.props.eventData.logo.url : "http://resources.ennect.com/_images/application/event/no-selected-image-placeholder-large.gif" } alt="" className="result-img img-fluid" style={{ width: '100%'}} />
            <a href={ this.props.eventData.url }>
              <button style={{ width: '100%' }} className="btn btn-info mrgtop20">More Info</button>
            </a>
          </div>
          <div className="col-xl-8 col-lg-7">
            <h3 style={{ marginTop: '20px' }}>{ this.props.eventData.name.text }</h3>
            <div style={{ marginTop: '5px' }}></div>
            <hr />
            <h4>Description</h4>
            <p className="desc">{ this.props.eventData.description.text.slice(0, 500) + '...' }</p>
          </div>
          <div className="col-md-1 text-xs-right">
            <a className="cursor">
              <span title="Login and add to favorites">
                <i className={ this.state.btnFavorite ?  'material-icons favorite favorite-on' : 'material-icons favorite'} onClick={ this.toggleHeart.bind(this) }>favorite
                </i>
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { saveFavorites })(ResultsEventbriteItem)