import React, { Component } from 'react';

export default class ProfileUserReview extends Component {
  constructor() {
    super();
    this.state = {
      fullDesc: false
    }
  }

  toggleDesc() {
    this.setState({
      fullDesc: ! this.state.fullDesc
    })
  }

  render() {
    return (
      <div>
        <div className="row" key={ this.props.key } >
          <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
            <img src="http://placehold.it/80x80" alt="" className="img-fluid" />
          </div>
          <div className="col-xl-6 col-lg-10 col-md-9 col-sm-9 col-xs-8">
            <h5>{ this.props.review.title }</h5>
            <i className="material-icons star-rating star-sm star-on">star</i>
            <i className="material-icons star-rating star-sm star-on">star</i>
            <i className="material-icons star-rating star-sm star-on">star</i>
            <i className="material-icons star-rating star-sm star-on">star</i>
            <i className="material-icons star-rating star-sm star-on">star</i>
            <div >
              <p onClick={ this.toggleDesc.bind(this) }>
                { this.state.fullDesc ? this.props.review.review : this.props.review.review.slice(0, 20) + "....."} 
              </p> 
            </div>
          </div>
        </div>

      </div>
    )
  };
};