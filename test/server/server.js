import { renderComponent, expect } from '../test_helper'
import App from '../../src/client/components/App';

describe('Express Server', () => {

  it('has routes', () => {
  const app = renderComponent(App);
    expect(app.hasClass('.navbar')).to.exist;
    expect(app.hasClass('.footer')).to.exist;
    expect(app.hasClass('.howItWorks')).to.exist;
  });
});
