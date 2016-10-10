import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getVolunteers }         from '../actions';

class VolunteerList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.searchChange = this.searchChange.bind(this);
  }
  componentWillMount() {
    var longitude = localStorage.getItem('longitude')
    var latitude = localStorage.getItem('latitude')
    console.log('hello! in volunteer ', this.props.location.query.q, longitude, latitude);
    this.props.getVolunteers(this.props.location.query.q, [longitude, latitude]);
  }

  searchChange(e) {
    console.log(e.target.value)
    this.setState({
      search: e.target.value
    })
  }

  render(){
    return (
      <div>
        <div style={{ marginTop: "100px" }} ></div>
        <h1 style={{ marginLeft: "75px" }}>Search Results for Volunteers</h1>
        <form >
          <input type="text" placeholder="Filter" style={{float: "right", marginRight: "100px"}} onChange={this.searchChange} value={this.state.search} />
        </form>
        { this.props.volunteers.filter((volunteerData) => {
          return volunteerData.title.toUpperCase().includes(this.state.search.toUpperCase()) || volunteerData.description.toUpperCase().includes(this.state.search.toUpperCase()) ||
            volunteerData.category.toUpperCase().includes(this.state.search.toUpperCase())
        }).map(function(volunteerData) {
          console.log(volunteerData)
          return (
            <div className="result" key={volunteerData._id}>
              <div className="row">
                <div className="col-md-3">
                  <img src="/img/signup.jpg" alt="" className="result-img img-fluid" />
                  <a href={'mailto:' + volunteerData.ownerEmail}>
                  <button style={{ width: '100%' }} className="btn btn-info btn-main-custom">Send Email</button>
                  </a>
                </div>
                <div className="col-md-9">
                  <h3 style={{ marginTop: '20px', color: '#00a4d3' }}>{ volunteerData.title }</h3>
                  <div style={{ marginTop: '5px' }}></div>
                  <hr />
                </div>
                <div className="col-md-6">
                  <h4>Description</h4>
                  <p >{ volunteerData.description }</p>
                </div>
                <div className="col-md-3">
                  <h4>Details</h4>
                  <table>
                    <tr><td>Category: </td><td>{volunteerData.category}</td></tr>
                    <tr><td>Paid: </td><td>{ volunteerData.volunteer ? "No" : "Yes" }</td></tr>
                  </table>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  }
}

var mapStateToProps = function ({ volunteers }) {
  return { volunteers }
};

export default connect (mapStateToProps, { getVolunteers })(VolunteerList);
