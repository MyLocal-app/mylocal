import { expect } from '../test_helper';
import { signupUser, signinUser, authError, signoutUser } from '../../src/client/actions';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from '../../src/client/constants/types';



describe('UserAuthentication', () => {

  // describe('Sign in user', () => {

  //   // it('should have correct action type', () => {
  //   //   // const action = signinUser();
  //   //   const signin = signinUser({email:'amanthapar@gmail.com', password:'123' });
  //   //   signin((action)=>{
  //   //     console.log(action);
  //   //     expect(action.type).to.equal(AUTH_USER);

  //   //   })
  //   // });
  // });

  // describe('Sign up user', () => {

  //   it('', () => {


  //   });
  // });

  // describe('Sign out User', () => {

  //   it('', () => {


  //   });
  // });

  describe('Displays Errors', () => {

    it('should have action type auth error', () => {
      const error = authError("");
      expect(error.type).to.equal(AUTH_ERROR);
    });

    it('should have payload error its given', () => {
      const error = authError('Please try again');
      expect(error.payload).to.equal('Please try again');
    });
  });

});