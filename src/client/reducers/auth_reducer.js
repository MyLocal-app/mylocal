import { AUTH_USER, UNAUTH_USER, AUTH_ERORR } from '../constants/types'

export default function(state = {}, action) {
    // update existing state
  switch(action.type){

    case AUTH_USER:
      return { ...state, authenticated: true};
    case UNAUTH_USER:
      return { ...state, authenticated: false};
    case AUTH_ERROR:
      return { ...state, error: action.payload}
  }
  return state;
}