import { ADD_TASK_TOP, GET_TASKS } from '../constants';

export default function(state = [], action) {
  console.log('testing: task reducer: ', action.payload)
  switch(action.type){
    case ADD_TASK_TOP:
      return [ action.payload, ...state ];
    case GET_TASKS:
      return action.payload;
  }
  return state;
}