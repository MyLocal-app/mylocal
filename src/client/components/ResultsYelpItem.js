import React, { Component } from 'react';

export default class ResultsYelpItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnFavorite: false
    };
  }

  toggleHeart() {
    this.setState({
      btnFavorite: !this.state.btnFavorite
    })
  }

  render() {
    return (
      <div className="result" key={ this.props.restaurant.id }>
        <div className="row">
          <div className="col-md-2">
            <img src={ !!this.props.restaurant.image_url ? this.props.restaurant.image_url : "http://resources.ennect.com/_images/application/event/no-selected-image-placeholder-large.gif" } alt="" className="img-fluid result-img" style={{ 'width': '100%' }} />
            <a href={ this.props.restaurant.url }>
              <button style={{ 'width': '100%' }} className="btn btn-info btn-more-info">More</button>
            </a>
          </div>
          <div className="col-md-9">
            <h3 style={{"marginTop":"20px"}}>{ this.props.restaurant.name }</h3>
            <i className={ `material-icons star-rating ${ Math.floor(this.props.restaurant.rating) >= 1 ? 'star-on' : '' }` }>star</i>
            <i className={ `material-icons star-rating ${ Math.floor(this.props.restaurant.rating) >= 2 ? 'star-on' : '' }` }>star</i>
            <i className={ `material-icons star-rating ${ Math.floor(this.props.restaurant.rating) >= 3 ? 'star-on' : '' }` }>star</i>
            <i className={ `material-icons star-rating ${ Math.floor(this.props.restaurant.rating) >= 4 ? 'star-on' : '' }` }>star</i>
            <i className={ `material-icons star-rating ${ Math.floor(this.props.restaurant.rating) >= 5 ? 'star-on' : '' }` }>star</i>
            <div style={{ "marginTop":"5px" }}></div>
            <i className="material-icons locationPointer">location_on</i>
            { this.props.restaurant.location.display_address.join(', ') }
            <hr />
            <h4>Review Snippet</h4>
            <p className="desc">{ this.props.restaurant.snippet_text }</p>
          </div>
          <div className="col-md-1 text-xs-right">
            <i className={ this.state.btnFavorite ?  'material-icons favorite favorite-on' : 'material-icons favorite'} onClick={ this.toggleHeart.bind(this) }>favorite</i>
          </div>
        </div>
      </div>
    )
  }
}