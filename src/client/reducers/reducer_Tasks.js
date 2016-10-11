import { ADD_TASK_TOP, GET_TASKS, GET_USER_TASKS } from '../constants';

export default function(state = [], action) {
  switch(action.type){
    case ADD_TASK_TOP:
      return [ action.payload, ...state ];
    case GET_TASKS:
      return action.payload;
    case GET_USER_TASKS:
      return action.payload
  }
  return state;
}