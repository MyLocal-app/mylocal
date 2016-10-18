import React, { Component } from 'react';
import { connect }          from 'react-redux';
import * as actions         from '../actions';

class Signout extends Component {
  componentWillMount(){
    this.props.signoutUser();
  }

  render(){

    return (
     <div className="main-bg">
      <div className="main-bg-text">
        <h2 className="main-bg-text-hero-blue">We Find, You Choose</h2>
        <h3 >Good Bye! Have a nice day...</h3>
        <h4>Come back soon!</h4>
      </div>
      </div>
    )
  }
}

export default connect(null, actions)(Signout);