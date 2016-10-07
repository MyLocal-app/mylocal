import { ADD_SERVICE_TOP, GET_SERVICES } from '../constants';

export default function(state = [], action) {
  switch(action.type){
    case ADD_SERVICE_TOP:
      return [ action.payload, ...state ];
    case GET_SERVICES:
      return action.payload;
  }
  return state;
}