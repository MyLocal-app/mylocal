import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => (
  <GoogleMapLoader
    containerElement={ <div className="result-img img-fluid" style={{ 'width': '100%', 'height': '200px' }} /> }
    googleMapElement={
      <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }} />
    }
  />
);