import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
import { Link } from 'react-router'

class Signup extends React.Component {

  onFormSubmit( formProps ) {
    this.props.signupUser(formProps);
  }

  renderAlert(){
    if (this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }


  render() {
    // Form properties
    const { handleSubmit, fields: {firstName, lastName, email, password, address} } = this.props;
    // note latest redux form gives warning message on spread operator, but still works
    // rolled back to redux 5.33, since 6.05 uses a different format.
    return (
      <div className="main-banner" style={{ 'textAlign': 'center' }}>
        <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2" style={{ 'marginTop': '200px' }}>
          <h3 style={{ 'fontFamily': 'Julius Sans One' }}>Sign Up</h3>
          <hr />
          <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} style={{ 'marginTop': '20px' }}>
            <div className="form-group">
              <input {...firstName} type="text" style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="First Name.." required />
            </div>
            <div className="form-group">
              <input {...lastName} type="text" style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="Last Name.." required />
            </div>
            <div className="form-group">
              <input {...email} type="email" style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="Email.." required />
            </div>
            <div className="form-group">
              <input {...password} type="password" style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }} placeholder="Password.." required />
            </div>
            <div className="form-group">
              <Autocomplete
                {...address}
                style={{ 'border-radius': '5px', 'display': 'block', 'width': '100%', 'border': '1px solid #ddd', 'outline': 'none', 'padding': '7px', 'margin': '0 auto' }}
                types={['address']}
                placeholder="Street Address.."
              />
            </div>
            <button action="submit" style={{ 'border-radius': '5px', 'marginTop': '5px', 'width': '100%', 'border': 'none', 'outline': 'none', 'padding': '16px', 'backgroundColor': 'lightgreen', 'color': 'white', 'fontSize': '20px' }}>Submit</button>
            <div style={{ 'marginTop': '15px' }}><Link to="signin" style={{ 'textDecoration': 'none' }}>Already have an account? <strong>Signip</strong>...</Link></div>
          </form>
        </div>
      </div>
    );
  }
}

function validate(formProps){
  // to do validate - all inputs required?
  const errors = {};
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['firstName', 'lastName', 'email', 'password', 'address'],
  validate
}, mapStateToProps, actions)(Signup);