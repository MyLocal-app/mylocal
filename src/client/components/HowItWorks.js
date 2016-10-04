import React, { Component } from 'react';

export default class HowItWorks extends Component {
  render() {
    return (
      <div className="divider container-fluid howItWorks">
        <h1>How It Works</h1>
        <div style={{ 'marginTop':'30px' }}></div>
        <div className="row">
          <div className="col-md-2 offset-md-2">
            <i className="material-icons howItWorks-Icon">search</i>
            <br />
            <h3 style={{ 'fontFamily': 'Josefin Sans' }}>Search</h3>
          </div>
          <div className="col-xs-1 hidden-sm-down">
            <i className="material-icons howItWorks-Icon howItWorks-Icon-Next">keyboard_arrow_right</i>
          </div>
          <div className="col-md-2">
            <i className="material-icons howItWorks-Icon">touch_app</i>
            <br />
            <h3 style={{ 'fontFamily': 'Josefin Sans' }}>Choose</h3>
          </div>
          <div className="col-xs-1 hidden-sm-down">
            <i className="material-icons howItWorks-Icon howItWorks-Icon-Next">keyboard_arrow_right</i>
          </div>
          <div className="col-md-2">
            <i className="material-icons howItWorks-Icon">credit_card</i>
            <br />
            <h3 style={{' fontFamily': 'Josefin Sans' }}>Pay</h3>
          </div>
        </div>
      </div>
    );
  }
}