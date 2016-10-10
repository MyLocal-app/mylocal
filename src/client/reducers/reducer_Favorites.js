import { FAVORITES } from '../constants';

export default function(state = [], action) {
  switch(action.type) {
    case FAVORITES:
      return action.payload;
  }
  return state;
};