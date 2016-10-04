import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import Auth                from './reducer_Auth';
import EventbriteResults   from './reducer_EventbriteResults';
import YelpResults         from './reducer_YelpResults';
import SearchTerms         from './reducer_SearchTerms';
import Categories          from './reducer_Categories';

const rootReducer = combineReducers({
  categories: Categories,
  eventbriteResults: EventbriteResults,
  yelpResults: YelpResults,
  form: form,
  auth: Auth,
  searchTerms: SearchTerms
});

export default rootReducer;