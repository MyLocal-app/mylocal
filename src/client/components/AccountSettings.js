import React          from 'react';
import ChangePassword from '../containers/ChangePassword';
import { connect } from 'react-redux';
import { updateUser, fetchLocalUser } from '../actions';
import Autocomplete         from 'react-google-autocomplete';

class GeneralSettings extends React.Component {
  constructor() {
    super();
    this.state = {
      changeInPassword: false,
      firstName: '',
      lastName: '',
      description: '',
      address: '',
      locObj: {},
      file: '',
      email: ''
    };
  }

  componentWillMount() {
    this.props.fetchLocalUser(localStorage.getItem('token'));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      firstName: nextProps.localUser.firstName,
      lastName: nextProps.localUser.lastName,
      description: nextProps.localUser.selfDescription,
      address: nextProps.localUser.address,
      location: nextProps.localUser.location,
      file: nextProps.localUser.image,
      email: nextProps.localUser.email
    })
  }

  applyChanges() {
    this.setState({
      changeInPassword: true
    });
    this.props.updateUser(localStorage.getItem('token'), {newDescription: this.state.description, firstName: this.state.firstName, lastName: this.state.lastName, address: this.state.address, locObj: this.state.locObj, file: this.state.file});
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

  onDescriptionChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  onAddressChange(event) {
    this.setState({
      address: event.formatted_address
    })
  }

  onLocationChange(event) {
    this.setState({
      address: event.formatted_address,
      locObj: event
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
  render() {
    return (
      <div>
        <nav className="nav nav-inline settings-bar">
          <a className="nav-link" href="#">General Settings</a>
          <a className="nav-link" href="/account/tasks">My Tasks</a>
          <a className="nav-link" href={ `/user/${ this.state.email }` }>Public Profile</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link" href="#">Link</a>
        </nav>

        <div style={{ "marginTop":"132px" }}></div>

        <div className="general-settings">
          <h2 className="settings-main">General Settings</h2>
          <hr />
          <div className="settings-panel">
            <h4 className="settings-subtitle">Name</h4>
            <hr />
            <div className="row">
              <div className="col-md-3">
                <input type="text" style={{ "borderRadius":"5px", "border":"1px solid #ddd", "outline":"none", "width":"100%", "marginTop":"10px", "padding":"7px" }} placeholder="First Name.." value={ this.state.firstName } onChange={this.onFirstNameChange.bind(this)} />
              </div>
              <div className="col-md-3">
                <input type="text" style={{ "borderRadius":"5px", "border":"1px solid #ddd", "outline":"none", "width":"100%", "marginTop":"10px", "padding":"7px" }} placeholder="Last Name.." value={ this.state.lastName } onChange={this.onLastNameChange.bind(this)} />
              </div>
            </div>
          </div>
          <div className="settings-panel">
            <h4 className="settings-subtitle">Change Password</h4>
            <hr />
            <ChangePassword changeInPassword={ this.state.changeInPassword }/>
          </div>
          <div className="settings-panel">
            <h4 className="settings-subtitle">Address</h4>
            <hr />
            <Autocomplete
              style={{ "borderRadius":"5px", "border":"1px solid #ddd", "outline":"none", "width":"280px", "marginTop":"10px", "padding":"7px" }}
              value={ this.state.address }
              onChange={this.onAddressChange.bind(this)}
              onPlaceSelected={ this.onLocationChange.bind(this)}
              types={ ['address'] }
              placeholder="Full address"
            />
          </div>
          <div className="settings-panel">
            <h4 className="settings-subtitle">Profile Picture</h4>
            <hr />
            <input
              type="file"
              id="inputFileToLoad"
              style={{ 'borderRadius': '5px', 'display': 'block', 'width': '280px', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'backgroundColor': 'white' }}
              placeholder="Upload image.."
              onChange={ this.onFileChange.bind(this) }
            />
          </div>
          <div className="settings-panel">
            <h4 className="settings-subtitle">Description</h4>
            <hr />
            <textarea style={{ "borderRadius":"5px", "border":"1px solid #ddd", "outline":"none", "width":"280px", "padding":"7px" }} placeholder="Description.." rows="5" value={ this.state.description } onChange={this.onDescriptionChange.bind(this)}></textarea>
          </div>
          <div className="settings-panel">
            <button onClick={ this.applyChanges.bind(this) } style={{ 'width': '280px' }} className="btn btn-info btn-main-custom">Apply Changes and Signout</button>
          </div>
        </div>
      </div>
    )
  }
}

var mapStateToProps = function({ localUser }) {
  return { localUser };
};

export default connect(mapStateToProps, { updateUser, fetchLocalUser })(GeneralSettings);