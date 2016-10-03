import { SEARCH_TERMS } from '../actions/searchActions'

export default function(state = {}, action) {
  switch(action.type){
    case SEARCH_TERMS:
      return action.payload;
  }
  return state;
}