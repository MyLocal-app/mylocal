import { EVENTBRITE_RESULTS } from '../constants';

export default function(state = [], action) {
  switch(action.type) {
    case EVENTBRITE_RESULTS:
    return action.payload;
  }
  return state;
}