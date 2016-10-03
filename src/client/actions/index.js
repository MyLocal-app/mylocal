import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from '../constants/types';



// action submits email, pw to the server
// action creator > action > Dispatch > sent to all reducers
// we are using redux thunk, because it gives you access to Dispatch
// we are not using redux promise
// if success, update state of app to authenticated
// save jwt token
// redirect
// async function
export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post('/signin', {email, password})
    .then(response =>{
      //update state - dispatch action by redux-thunk
      dispatch({ type: AUTH_USER, payload: 'welcome back!' });
      // send user to / and update the history stack
      browserHistory.push('/');
      localStorage.setItem('token', response.data.token);
    })
    .catch(() => {
      dispatch(authError('Wrong login'));
    });
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}

export function signupUser({ email, password, firstName, lastName, address }) {
  return function(dispatch) {
    console.log('in actions', firstName, lastName);
    axios.post('/signup', {email, password, firstName, lastName, address})

    .then(response =>{
      dispatch({ type: AUTH_USER, payload: firstName + ' ' + lastName});
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    })
    .catch(error => dispatch(authError(error.response.data.error)));
  };
}


