import React, { Component }           from 'react';
import ResultsFavoritesYelpItem       from './ResultsFavoritesYelpItem';
import ResultsFavoritesEventbriteItem from './ResultsFavoritesEventbriteItem';
import { connect }                    from 'react-redux';
import { browserHistory }             from 'react-router';
import { fetchFavorites }             from '../actions';


class ResultsFavorites extends Component {
  constructor(){
    super();
    this.state = {
      list: 'Loading............'
    }
  }
  componentWillMount() {
    if (localStorage.getItem('token')) {
      this.props.fetchFavorites(localStorage.getItem('token'));
    }
  }
  componentWillReceiveProps(nextprops){
    if (!nextprops.favorites.length) {
      this.setState({
        list: 'List is empty'
      })
    }
  }
  render() {
    return (
      <div className="results">
        <div style={{ "marginTop": "84px" }}></div>
        <h2 className="searchresults-main">Favorites List</h2>
        <input placeholder="Filter" className="inputBox filter" />
        <div className="clearfloat"></div>
        { this.props.favorites.length === 0 ? <p>{ this.state.list }</p> : '' }
        <hr />
        { this.props.favorites.map(favorite => { 
          if (favorite.type === 'restaurant') {
            return <ResultsFavoritesYelpItem favorites={this.props.favorites} restaurant={ favorite.value } />
          } else if (favorite.type === 'event') {
            return <ResultsFavoritesEventbriteItem favorites={this.props.favorites}eventData={ favorite.value } />
          }
        }) }
      </div>
    );
  }
}

var mapStateToProps = function({ favorites }) {
  return { favorites };
};

export default connect(mapStateToProps, { fetchFavorites })(ResultsFavorites)