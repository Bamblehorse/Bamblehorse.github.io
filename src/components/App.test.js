import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

test('Expect App to render text: "Bamblehorse"', () => {
  const app = shallow(<App message="Bamblehorse" />);
  expect(app.text()).toBe('Bamblehorse');
});
