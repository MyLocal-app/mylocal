import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import Auth       from './reducer_Auth';
import Eventbrite from './reducer_Eventbrite';
import SearchYelp from './reducer_SearchYelp'
import SearchBar  from './reducer_SearchBar';
import Categories from './reducer_Categories';

const rootReducer = combineReducers({

  categories: Categories,
  eventbrite: Eventbrite,
  yelpResults: SearchYelp,
  form: form,
  auth: Auth,
  searchTerms: SearchBar
});

export default rootReducer;