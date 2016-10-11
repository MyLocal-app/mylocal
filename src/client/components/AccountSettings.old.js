import React          from 'react';
import ChangePassword from '../containers/ChangePassword';
import { connect } from 'react-redux';
import { updateUser } from '../actions';
import Autocomplete         from 'react-google-autocomplete';

class GeneralSettings extends React.Component {
  constructor() {
    super();
    this.state = {
      changeInPassword: false,
      description: '',
      address: '',
      file: ''
    };
  }

  applyChanges() {
    this.setState({
      changeInPassword: true
    })
    this.props.updateUser({newDescription: this.state.description})
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
          <a className="nav-link" href="#">General</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link" href="#">Link</a>
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
                <input type="text" style={{ "borderRadius":"5px", "border":"1px solid #ddd", "outline":"none", "width":"100%", "marginTop":"10px", "padding":"7px" }} placeholder="First Name.." />
              </div>
              <div className="col-md-3">
                <input type="text" style={{ "borderRadius":"5px", "border":"1px solid #ddd", "outline":"none", "width":"100%", "marginTop":"10px", "padding":"7px" }} placeholder="Last Name.." />
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
              value={ this.state.location }
              onChange={ (this.onAddressChange).bind(this) }
              onPlaceSelected={ (place) => this.onInputChange(place) }
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
            <textarea style={{ "borderRadius":"5px", "border":"1px solid #ddd", "outline":"none", "width":"280px", "padding":"7px" }} placeholder="Description.." rows="5"></textarea>
          </div>
          <div className="settings-panel">
            <button onClick={ this.applyChanges.bind(this) } className="btn btn-info btn-main-custom">Apply Changes</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { updateUser })(GeneralSettings);