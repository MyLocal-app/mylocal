import React, { Component } from 'react';
import NavBar               from '../containers/NavBar'; 
import Footer               from './Footer'; 


export default class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
        <NavBar />
        <Footer />
      </div>
    );
  }
}