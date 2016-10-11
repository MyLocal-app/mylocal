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
import TaskList          from './containers/TaskList';
import ProfileUser       from './containers/ProfileUser';
import ServiceList       from './containers/ServiceList';
import VolunteerList     from './containers/VolunteerList';
import ResultsFavorites  from './containers/ResultsFavorites';
import AccountSettings   from './components/AccountSettings';
import ChangedPassword   from './containers/ChangePassword';
import ReviewTasks       from './containers/ReviewTasks';

export default (
  <Router path="/" component = { App } >
    <IndexRoute component = { Home } />
      <Route path="/signin" component = { Signin }/>
      <Route path="/signout" component = { Signout } />
      <Route path="/signup" component = { Signup } />
      <Route path="/changepassword" component = { ChangedPassword } />
      <Route path="/search" component = { SearchLocation } />
      <Route path="/search/restaurants" component = { ResultsYelp } />
      <Route path="/search/events" component = { ResultsEventbrite } />
      <Route path="/search/services" component = { ServiceList } />
      <Route path="/search/volunteers" component = { VolunteerList } />
      <Route path="/search/tasks" component = { TaskList } />
      <Route path="/user/:email" component = { ProfileUser } />
      <Route path="/favorites" component = { ResultsFavorites } />
      <Route path="/account" component = { AccountSettings } />
      <Route path="/account/tasks" component = { ReviewTasks } />
  </Router>
);
