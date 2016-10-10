import { combineReducers } from 'redux';
import { reducer as Form } from 'redux-form';
import Auth                from './reducer_Auth';
import EventbriteResults   from './reducer_EventbriteResults';
import YelpResults         from './reducer_YelpResults';
import SearchTerms         from './reducer_SearchTerms';
import Categories          from './reducer_Categories';
import Restaurant          from './reducer_Restaurant';
import Tasks               from './reducer_Tasks';
import Services            from './reducer_Services';
import User                from './reducer_FetchUser';
import Volunteers          from './reducer_Volunteers';

const rootReducer = combineReducers({
  categories: Categories,
  eventbriteResults: EventbriteResults,
  yelpResults: YelpResults,
  form: Form,
  auth: Auth,
  searchTerms: SearchTerms,
  restaurant: Restaurant,
  tasks: Tasks,
  services: Services,
  user: User,
  volunteers: Volunteers

});

export default rootReducer;