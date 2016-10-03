import { SEARCH_EVENTBRITE } from '../constants'

export default function(state = [], action) {

  switch(action.type) {

    case SEARCH_EVENTBRITE:
    return action.payload;
  }

  return state;
}