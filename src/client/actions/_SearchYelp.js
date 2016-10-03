import axios from 'axios';
import { browserHistory } from 'react-router';





export function searchYelp (location) {
  const YELP_URL = '/search/restaurants';
  return function(dispatch) {
    dispatch({
      type: SEARCH_YELP,
      payload: []
    });
    browserHistory.push('/search/restaurants');
    const url = `${ YELP_URL }?location=${ location }&term=restaurant`;
    const request = axios.get(url)
    .then(response => {
      dispatch({
        type: SEARCH_YELP,
        payload: response.data.businesses
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}