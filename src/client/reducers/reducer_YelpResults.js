import { YELP_RESULTS } from '../constants';

export default function(state = [], action) {
  switch(action.type) {
    case YELP_RESULTS:
      return action.payload;
  }
  return state;
};