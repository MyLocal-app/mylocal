import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getServices }         from '../actions';

class ServiceList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.searchChange = this.searchChange.bind(this);
  }
  componentWillMount() {
    this.props.getServices();
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
        <h1 style={{ marginLeft: "75px" }}>Search Results for Services</h1>
        <form >
          <input type="text" placeholder="Filter" style={{float: "right", marginRight: "100px"}} onChange={this.searchChange} value={this.state.search} />
        </form>
        { this.props.services.filter((serviceData) => {
          return serviceData.title.toUpperCase().includes(this.state.search.toUpperCase()) || serviceData.description.toUpperCase().includes(this.state.search.toUpperCase()) ||
            serviceData.category.toUpperCase().includes(this.state.search.toUpperCase())
        }).map(function(serviceData) {
          console.log(serviceData)
          return (
            <div className="result" key={serviceData._id}>
              <div className="row">
                <div className="col-md-3">
                  <img src="/img/signup.jpg" alt="" className="result-img img-fluid" />
                  <a href={'mailto:' + serviceData.ownerEmail}>
                  <button style={{ width: '100%' }} className="btn btn-info mrgtop20">Send Email</button>
                  </a>
                </div>
                <div className="col-md-9">
                  <h3 style={{ marginTop: '20px', color: '#00a4d3' }}>{ serviceData.title }</h3>
                  <div style={{ marginTop: '5px' }}></div>
                  <hr />
                </div>
                <div className="col-md-6">
                  <h4>Description</h4>
                  <p >{ serviceData.description }</p>
                </div>
                <div className="col-md-3">
                  <h4>Details</h4>
                  <table>
                    <tr><td>Category: </td><td>{serviceData.category}</td></tr>
                    <tr><td>Paid: </td><td>{ serviceData.volunteer ? "No" : "Yes" }</td></tr>
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

var mapStateToProps = function ({ services }) {
  return { services }
};

export default connect (mapStateToProps, { getServices })(ServiceList);
