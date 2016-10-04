import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../src/client/reducers/';
import chaiJquery from 'chai-jquery';

//Set up a test environment to run like a browswer in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = { userAgent: 'node.js' };
const $ = jquery(global.window);
//build a 'renderComponent' helper that should render a given react class
function renderComponent (ComponentClass, props = {}, state = {}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(rootReducer, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  return $(ReactDOM.findDOMNode(componentInstance)); //produces HTML
}

//build a helper for simulating events
$.fn.simulate = function (eventName, value) {
  if(value){
    this.val(value);
  }
  TestUtils.simulate[eventName](this[0]);
}

//set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
