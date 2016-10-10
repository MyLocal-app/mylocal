import { GET_VOLUNTEERS } from '../constants';

export default function(state = [], action) {
  switch(action.type){
    case GET_VOLUNTEERS:
      return action.payload;
  }
  return state;
}