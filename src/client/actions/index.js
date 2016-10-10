import axios                                  from 'axios';
import { browserHistory }                     from 'react-router';
import helpers                                from './action_helpers';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from '../constants';
import { SEARCH_TERMS }                       from '../constants';
import { EVENTBRITE_RESULTS }                 from '../constants';
import { YELP_RESULTS }                       from '../constants';
import { RESTAURANT }                         from '../constants';
import { ADD_TASK_TOP, GET_TASKS }            from '../constants';
import { ADD_SERVICE_TOP, GET_SERVICES }      from '../constants';
import { FETCH_USER }                         from '../constants';
import { GET_VOLUNTEERS }                     from '../constants';
import { FAVORITES }                          from '../constants';

// action submits email, pw to the server
// if success, update state of app to authenticated
// save jwt token
// redirect
// async function
export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post('/signin', { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER, payload: response.data.firstName + ' ' + response.data.lastName });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.firstName + ' ' + response.data.lastName);
      localStorage.setItem('location', JSON.stringify(response.data.location))
      browserHistory.push('/');
    })
    .catch(() => {
      dispatch(authError('Wrong login'));
    });
  };
};

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};

export function signoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('location')
  return { type: UNAUTH_USER };
};

export function signupUser(firstName, lastName, email, password, address, locObj, file) {
  return function(dispatch) {
    console.log('actondispatch',file)
    axios.post('/signup', { email, password, firstName, lastName, address, locObj, file })
    .then(response =>{
      dispatch({ type: AUTH_USER, payload: firstName + ' ' + lastName});
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', firstName + ' ' + lastName);
      localStorage.setItem('location', JSON.stringify(locObj))
      browserHistory.push('/');
    })
    .catch(error => dispatch(authError(error.response.data.error)));
  };
};

export function submitQueryAndType (query, type) {
  return {
    type: SEARCH_TERMS,
    payload: {
      query: query,
      type: type
    }
  }
};

export function searchEventbrite (query, location) {
  const EVENTBRITE_API_KEY = "4JELE3WKM2XRYPGWNE7Q";
  const EVENTBRITE_URL = `https://www.eventbriteapi.com/v3/events/search/?token=${ EVENTBRITE_API_KEY }`;
  return function(dispatch) {
    const url = `${ EVENTBRITE_URL }&q=${ query }&sort_by=best&location.address=${ location }`;
    const request = axios.get(url)
    .then(response => {
      dispatch({
        type: EVENTBRITE_RESULTS,
        payload: response.data.events
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
};

export function searchYelp (location, query) {
  const YELP_URL = '/api/search/restaurants';
  return function(dispatch) {
    const url = `${ YELP_URL }?location=${ location }&term=${ query }`;
    const request = axios.get(url)
    .then(response => {
      dispatch({
        type: YELP_RESULTS,
        payload: response.data.businesses
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
};

export function fetchRestaurant(id) {
  return function(dispatch) {
    axios.get(`/fetchRestaurant/${ id }`)
    .then(response => {
      dispatch({
        type: RESTAURANT,
        payload: response.data
       })
    })
    .catch((error) => {
      console.log(error);
    });
  }
};

export function addTask({ title, description, category, hours, volunteer, dollarvalue, image = '' }, location) {
  return function(dispatch) {
    const header = {
      headers: {
        authorization: localStorage.getItem('token')
      }
    };
    const task = {
      title,
      description,
      category,
      hours,
      volunteer,
      dollarvalue,
      location,
      image
    };
    axios.post('/api/addTask', task, header)
    .then(response =>{
      console.log("inside actions: ", response.data);
      dispatch({ type: ADD_TASK_TOP, payload: response.data.task });
    })
    .catch(error => console.log(error));
  };
}

export function getTasks(query, coordinates) {
  return function(dispatch) {
    axios.get("/api/getTasks", {
      params: {
        longitude: coordinates[0],
        latitude: coordinates[1]
      }
    })
    .then(response =>{
      dispatch({ type: GET_TASKS, payload: response.data.reverse() });
    })
    .catch(error => console.log(error));
  };
}

export function doTask(taskID, coordinates) {
  const header = {
    headers: {
      authorization: localStorage.getItem('token')
    }
  };
  return function(dispatch){
    axios.post('/api/doTask', {taskId: taskID, longitude : coordinates[0], latitude: coordinates[1]}, header)
    .then(response =>{
      dispatch({type: GET_TASKS, payload: response.data.reverse() })
    })
    .catch(error => console.log(error));
  }
}

export function addService({ title, description, category, volunteer, rate }, location) {
  return function(dispatch) {
    const header = {
      headers: {
        authorization: localStorage.getItem('token')
      }
    };
    const service = {
      title,
      description,
      category,
      rate,
      volunteer,
      location
    };
    axios.post('/api/addService', service, header)
    .then(response => {
      console.log("inside actions: ", response.data);
      dispatch({ type: ADD_SERVICE_TOP, payload: response.data.service });
    })
    .catch(error => console.log(error));
  };
}

export function getServices(query) {
  return function(dispatch) {
    axios.get('/api/getServices')
    .then(response => {
      console.log(response.data);
      dispatch({ type: GET_SERVICES, payload: response.data.reverse() });
    })
    .catch(error => console.log(error));
  };
}

export function fetchUser(email) {
  return function(dispatch) {
    axios.post('/api/fetchUser', { email })
      .then(function(response) {
        dispatch({ type: FETCH_USER, payload: response.data });
      })
      .catch(error => console.log(error));
  }
}

export function getVolunteers(query, coordinates ) {
  return function(dispatch) {
    axios.get('/api/getVolunteers', {
      params: {
        longitude: coordinates[0],
        latitude: coordinates[1]
      }
    })
    .then(response => {
      console.log(response.data);
      dispatch({ type: GET_VOLUNTEERS, payload: response.data.reverse() });
    })
    .catch(error => console.log(error));
  };
}

export function saveFavorites(token, type, value, action) {
  return function(dispatch) {
    const header = { headers: { authorization: localStorage.getItem('token') } };
      axios.post('/api/saveFavorite', { type: type, value: value, action: action }, header)
  }
}

export function updateFavorites(favorites, type, id) {
  const newFavorites = favorites.filter(function(favorite) {
          return !(favorite.type === type && favorite.value.id === id);
        });
  return {
      type: FAVORITES,
      payload: newFavorites
  }
}

export function fetchFavorites(token) {
  return function(dispatch) {
    const header = { headers: { authorization: token } };
      axios.get('/api/fetchFavorites', header)
        .then(function(response) {
          dispatch({ type: FAVORITES, payload: response.data });
      })
      .catch(error => console.log(error));
  }
}