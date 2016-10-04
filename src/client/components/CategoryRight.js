import React, { Component } from 'react';

export default class CategoryDetail extends Component {
  render() {
    return (
      <div className="row" style={{ margin: 'none' }}>
        <div className="col-lg-6 col-fluid">
          <img src={ this.props.image } className="img-fluid" alt="Jobs-Banner" />
        </div>
        <div className="col-lg-6 searchInfoMain">
          <h1>{ this.props.header }</h1>
          <div className="divider"></div>
          <button className="btn btn-outline-info btn-lg btn-main-custom">
            Search
          </button>
        </div>
      </div>
    );
  }
}