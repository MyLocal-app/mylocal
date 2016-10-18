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
      locObj: {},
      file: ''
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

  onLocationChange(locObj) {
    this.setState({
      address: locObj.formatted_address,
      locObj: locObj
    });
  }

  onFileChange(event) {
    // array of all files uploaded
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length) {
      var fileToLoad = filesSelected[0];
      // JS provides this class
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        console.log(fileLoadedEvent)
        // we take the result string from the event as below
        var srcData = fileLoadedEvent.target.result;
        this.setState({
          file: srcData
        })
      }.bind(this)
      // this reads the file (blob) as a base64 string, once read it triggers the onload method
      fileReader.readAsDataURL(fileToLoad);
    }
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.signupUser(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.address, this.state.locObj, this.state.file);
  }

  render() {
    return (
      <div className="main-banner" style={{ 'textAlign': 'center' }}>
        <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2" style={{ 'marginTop': '130px' }}>
          <h3 style={{ 'fontFamily': 'Julius Sans One' }}>Sign Up</h3>
          <hr />
          <form onSubmit={ this.onFormSubmit.bind(this) } style={{ 'marginTop': '20px' }} encType="multipart/form-data">
            <div className="form-group">
              <input type="text" className="sign form-field" placeholder="First Name.." required  onChange={ this.onFirstNameChange.bind(this) } />
            </div>
            <div className="form-group">
              <input type="text" className="sign form-field" placeholder="Last Name.." required  onChange={ this.onLastNameChange.bind(this) } />
            </div>
            <div className="form-group">
              <input type="email" className="sign form-field" placeholder="Email.." required  onChange={ this.onEmailChange.bind(this) } />
            </div>
            <div className="form-group">
              <input type="password" className="sign form-field" placeholder="Password.." required  onChange={ this.onPasswordChange.bind(this) } />
            </div>
            <div className="form-group">
              <Autocomplete
                className="sign form-field"
                type="text"
                types={ ['address'] }
                placeholder="Street Address.."
                value={this.state.location}
                onChange={this.onAddressChange.bind(this)}
                onPlaceSelected={ this.onLocationChange.bind(this)
                }
              />
            </div>
            <div className="form-group">
              <input
                type="file"
                id="inputFileToLoad"
                className="sign form-field"
                placeholder="Upload image.."
                onChange={ this.onFileChange.bind(this) }
              />
            </div>
            <button action="submit" className="btn btn-info">Submit</button>
            <div style={{ 'marginTop': '15px' }}><Link to="signin">Already have an account? <strong>Sign in</strong>...</Link></div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { signupUser })(Signup);