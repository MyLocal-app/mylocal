import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

 class NavBar extends Component {

  isAuthenticated() {
    if (!this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-item nav-link active">Sign in</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-item nav-link active">Sign up</Link>
        </li>
      ]
    } else {
      return (
        <li className="nav-item">
          <Link to="/signout" className="nav-item nav-link active">Sign Out</Link>
        </li>
      );
    }
  }

  render() {
    return (
      <header className="navbar navbar-light navbar-fixed-top bd-navbar">
        <div className="container-fluid">
          <nav>
            <div className="clearfix">
              <button className="navbar-toggler pull-xs-right hidden-sm-up" style={{outline:'none'}} type="button" data-toggle="collapse" data-target="#bd-main-nav" aria-controls="bd-main-nav" aria-expanded="false" aria-label="Toggle navigation">
                ☰
              </button>
              <Link className="navbar-brand hidden-sm-up" to="/">My Local</Link>
            </div>
            <div className="collapse navbar-toggleable-xs" id="bd-main-nav">
              <ul className="nav navbar-nav">
                <li className="nav-item hidden-xs-down">
                  <Link className="navbar-brand" to="/">My Local</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav pull-sm-right">
                <li className="nav-item">
                  <Link to="/search" className="nav-item nav-link active">Home</Link>
                </li>
               {this.isAuthenticated()}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state){
  return {
    authenticated : state.auth.authenticated
  };
}

export default connect(mapStateToProps)(NavBar);

