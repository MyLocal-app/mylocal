import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Signout extends Component {
  componentWillMount(){
    this.props.signoutUser();
  }

  render(){

    return (
     <div className="main-bg">
      <div className="main-bg-text">
        <h2 className="main-bg-text-hero">We Find, You Choose</h2>
        <h4 className="main-bg-text-hero-blue">Good Bye! Have a nice day...</h4>
      <div> Come back soon!</div>
      </div>
      </div>
    )
  }
}

export default connect(null, actions)(Signout);