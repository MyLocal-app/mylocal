import { combineReducers } from 'redux';
import { reducer as Form } from 'redux-form';
import Auth                from './reducer_Auth';
import EventbriteResults   from './reducer_EventbriteResults';
import YelpResults         from './reducer_YelpResults';
import SearchTerms         from './reducer_SearchTerms';
import Categories          from './reducer_Categories';
import Restaurant          from './reducer_Restaurant';

const rootReducer = combineReducers({
  categories: Categories,
  eventbriteResults: EventbriteResults,
  yelpResults: YelpResults,
  form: Form,
  auth: Auth,
  searchTerms: SearchTerms,
  restaurant: Restaurant
});

export default rootReducer;