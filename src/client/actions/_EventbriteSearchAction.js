





export function searchEventbrite (query, location) {
  const EVENTBRITE_API_KEY = "4JELE3WKM2XRYPGWNE7Q";
  const EVENTBRITE_URL = `https://www.eventbriteapi.com/v3/events/search/?token=${ EVENTBRITE_API_KEY }`;
  return function(dispatch) {
    dispatch({
      type: SEARCH_EVENTBRITE,
      payload: []
    });
    browserHistory.push('/search/events');
    const url = `${ EVENTBRITE_URL }&q=${ query }&location.address=${ location }`;
    const request = axios.get(url)
    .then(response => {
      dispatch({
        type: SEARCH_EVENTBRITE,
        payload: response.data.events
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}