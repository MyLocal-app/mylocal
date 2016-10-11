import React, { Component } from 'react';
import Autocomplete         from 'react-google-autocomplete';
import { connect }          from 'react-redux';
import { reviewTask }       from '../actions';
import { browserHistory }   from 'react-router';

class ReviewForm extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.review = {
      title: '',
      review: '',
      rating: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onInputChange(event) {
    const temp = this.state.review;
    temp[event.target.name] = event.target.value;
    this.setState({
      review: temp
    })
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.close();
    console.log(this.state.review.title, this.state.review.review, this.state.review.rating, this.props.servicePerson)
    this.props.reviewTask(this.state.review.title, this.state.review.review, this.state.review.rating, this.props.servicePerson);
  }

  onCancel(event) {
    event.preventDefault();
    this.props.close()
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} style={{width:"50%", margin:"0 auto"}}>
        <div className={"form-column"}>
        <label>Review Title</label>
        <input
          className="inputBox"
          type="text"
          name="title"
          onChange={this.onInputChange}
          value={this.state.review.title}
        />
        <label>Description</label>
        <textarea
          className="inputBox"
          rows="10"
          cols="25"
          style={{width: "300px", height: "120px"}}
          type="text"
          name="review"
          onChange={this.onInputChange}
          value={this.state.review.review}
        />
        </div>
        <div className={"form-column"}>
        <label>Rating</label>
        <input
          className="inputBox"
          type="number"
          name="rating"
          min="1"
          max="5"
          step="1"
          onChange={this.onInputChange}
          value={this.state.review.rating}
        />
        <br />
        <button action="submit" style={{margin: "35px 0"}} >Submit</button>
        <button onClick={this.onCancel} style={{margin: "35px 20px"}}>Cancel</button>
        </div>
      </form>

    )
  }
}


export default connect(null, { reviewTask })(ReviewForm);