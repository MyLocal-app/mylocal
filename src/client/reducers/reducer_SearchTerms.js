import { SEARCH_TERMS } from '../constants';

export default function(state = {}, action) {
  switch(action.type){
    case SEARCH_TERMS:
      return action.payload;
  }
  return state;
}