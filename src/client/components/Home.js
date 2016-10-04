import React, { Component } from 'react';
import Hero                 from './Hero';
import Categories           from '../containers/Categories';
import HowItWorks           from './HowItWorks'; 

export default class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Categories />
        <HowItWorks />
      </div>
    );
  }
}