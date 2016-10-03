import React, { Component } from 'react';
import CategoryLeft from '../components/CategoryLeft';
import CategoryRight from '../components/CategoryRight';
import { connect } from 'react-redux';

class Categories extends Component {
  render() {
    const categories = this.props.categories.map((category, key) => {
      //This alternates putting the image on the right and left of the page using two components
      if(key % 2 === 0){
        return <CategoryRight 
          key={ category.header } 
          header={ category.header } 
          image={ category.image } 
        />
      } else {
        return <CategoryLeft 
          key={ category.header } 
          header={ category.header } 
          image={ category.image }  
        />
      }
    })
    return (
      <div className="divider container-fluid">
        { categories }
      </div>
    );
  }
}

var mapStateToProps = function({ categories }) {
  return { categories };
};

export default connect(mapStateToProps)(Categories);