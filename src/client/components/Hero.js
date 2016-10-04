import React, { Component } from 'react';
import SearchLanding        from '../containers/SearchLanding';

export default class Hero extends Component {
  render() {
    return (
      <div className="main-bg">
        <div className="main-bg-text">
          <h1 className="main-bg-text-hero">We Find</h1>
          <h1 className="main-bg-text-hero-blue">You Choose</h1>
          <SearchLanding />
          <div className="divider"></div>
        </div>
      </div>
    );
  }
}
