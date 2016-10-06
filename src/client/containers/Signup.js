import React from 'react';
import { connect } from 'react-redux';
import Autocomplete from 'react-google-autocomplete';
import { signupUser } from '../actions';
import { Link } from 'react-router'

class Signup extends React.Component {

  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      file: {}
    }
  }

  onFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    })
  }

  onLastNameChange(event) {
    this.setState({
      lastName: event.target.value
    })
  }

  onEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  onAddressChange(event) {
    this.setState({
      address: event.formatted_address
    })
  }

  onFileChange(event) {
    console.log(event.target.files[0])
    this.setState({
      file: event.target.files[0]
    })
    console.log(event.target.files[0])
 
  }

  onFormSubmit(event) {
     console.log('state is ', this.state.file)
    event.preventDefault();
    this.props.signupUser(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.address, this.state.file);
  }

  render() {
    return (
      <div className="main-banner" style={{ 'textAlign': 'center' }}>
        <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2" style={{ 'marginTop': '200px' }}>
          <h3 style={{ 'fontFamily': 'Julius Sans One' }}>Sign Up</h3>
          <hr />
          <form onSubmit={ this.onFormSubmit.bind(this) } style={{ 'marginTop': '20px' }} encType="multipart/form-data">
            <div className="form-group">
              <input type="text" style={{ 'borderRadius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="First Name.." required  onChange={ this.onFirstNameChange.bind(this) } />
            </div>
            <div className="form-group">
              <input type="text" style={{ 'borderRadius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="Last Name.." required  onChange={ this.onLastNameChange.bind(this) } />
            </div>
            <div className="form-group">
              <input type="email" style={{ 'borderRadius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="Email.." required  onChange={ this.onEmailChange.bind(this) } />
            </div>
            <div className="form-group">
              <input type="password" style={{ 'borderRadius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="Password.." required  onChange={ this.onPasswordChange.bind(this) } />
            </div>
            <div className="form-group">
              <Autocomplete
                style={{ 'borderRadius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }}
                types={ ['address'] }
                placeholder="Street Address.."
                onPlaceSelected={ this.onAddressChange.bind(this) }
              />
            </div>
            <div className="form-group">
              <input
                type="file"
                name="userImage"
                style={{ 'borderRadius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} 
                placeholder="Upload image.."
                onChange={ this.onFileChange.bind(this) }
              />
            </div>
            <button action="submit" style={{ 'borderRadius': '5px', 'marginTop': '5px', 'width': '100%', 'border': 'none', 'outline': 'none', 'padding': '16px', 'backgroundColor': 'lightgreen', 'color': 'white', 'fontSize': '20px' }}>Submit</button>
            <div style={{ 'marginTop': '15px' }}><Link to="signin" style={{ 'textDecoration': 'none' }}>Already have an account? <strong>Sign in</strong>...</Link></div>
          </form>
        </div>
      </div>
    );
  }
}


export default connect(null, { signupUser })(Signup);