import { renderComponent, expect } from '../test_helper';
import Signin                      from '../../src/client/containers/Signin';

describe('Sign In Page', () => {
  const signin = renderComponent(Signin)
  it('has input boxes', () => {
    expect(signin.find(".sign")).to.exist    
    expect(signin.find(".form-field")).to.exist
  })
  it('has submit button', () => {
    expect(signin.find(".btn")).to.exist    
    expect(signin.find(".btn-info")).to.exist
  })
  describe('Logging in', () => {
    before(() => {
      signin.find('.email').simulate('change', 'test@test.com')      
      signin.find('.password').simulate('change', 'test')
    })
    it('takes input email', () => {
      expect(signin.find('.email')).to.have.value('test@test.com')
    })
    it('takes input password', () => {
      expect(signin.find('.password')).to.have.value('test')
    })
  })
});