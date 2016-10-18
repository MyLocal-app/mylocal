import React, { Component }    from 'react';
import { reduxForm }           from 'redux-form';
import * as actions            from '../actions';
import { browerHistory, Link } from 'react-router'

class Signin extends Component {

  onFormSubmit( {email, password}) {
    this.props.signinUser({ email, password });
  }

  renderAlert(){
    if (this.props.errorMessage){
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> { this.props.errorMessage }
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;
    return (
        <div className="main-banner signin" style={{ textAlign:"center" }}>
          <div className="col-md-4 offset-md-4 col-sm-8 offset-sm-2" style={{ marginTop:'250px' }}>
            <h3 style={{marginTop:15+"px", fontFamily:"Julius Sans One"}}>Sign In</h3>
            <hr />
            <form onSubmit={ handleSubmit(this.onFormSubmit.bind(this)) } >
              <div className="form-group">
                <input { ...email } type="text" className="sign form-field email" placeholder="Email.." required />
              </div>
              <div className="form-group">
                <input { ...password } type="password"  className="sign form-field password" placeholder="Password.." required />
              </div>
              {this.renderAlert()}
              <button action="submit" className="btn btn-info">Sign in</button>
              <div style={{ marginTop: 15+'px'}}><Link to="/signup">Don't have an account? <strong>Signup</strong>...</Link></div>
            </form>
          </div>
        </div>
    );
  } 
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);