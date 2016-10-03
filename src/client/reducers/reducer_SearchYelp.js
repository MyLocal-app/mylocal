import { SEARCH_YELP } from '../constants'

export default function(state = [], action) {
  switch(action.type) {
    case SEARCH_YELP:
      return action.payload;
  }
  return state;
}