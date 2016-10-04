import React             from 'react';
import SearchLocationBar from '../containers/SearchLocationBar';

export default class SearchLocation extends React.Component {

  render() {
    return (
      <div className="main-bg">
        <div className="main-bg-text">
          <h1 className="main-text">Where do you want to find it?</h1>
          <hr className="hr" />
          <div className="divider"></div>
          <SearchLocationBar />
          <div className="divider"></div>
        </div>
      </div>
    );
  }
}