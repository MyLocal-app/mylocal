import { SEARCH_EVENTBRITE } from '../actions/EventbriteSearchAction'

export default function(state = [], action) {

  switch(action.type) {

    case SEARCH_EVENTBRITE:
    return action.payload;
  }

  return state;
}