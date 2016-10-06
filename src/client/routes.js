import React from 'react';
import { Route, IndexRoute, browserHistory, Router } from 'react-router';
import App               from './components/App';
import Home              from './components/Home';
import Signin            from './containers/Signin';
import SearchLocation    from './containers/SearchLocation';
import ResultsYelp       from './containers/ResultsYelp';
import ResultsEventbrite from './containers/ResultsEventbrite';
import Signout           from './containers/Signout';
import Signup            from './containers/Signup';
import Profile           from './containers/Profile';
import Tasks             from './components/Tasks';
import ProfileUser       from './containers/ProfileUser';

export default (
  <Router path="/" component = { App } >
    <IndexRoute component = { Home } />
      <Route path="/signin" component = { Signin }/>
      <Route path="/signout" component = { Signout } />
      <Route path="/signup" component = { Signup } />
      <Route path="/search" component = { SearchLocation } />
      <Route path="/search/restaurants" component = { ResultsYelp } />
      <Route path="/search/events" component = { ResultsEventbrite } />
      <Route path="/search/tasks" component = { Tasks } />
      <Route path="/user" component = { ProfileUser } />
  </Router>
);
