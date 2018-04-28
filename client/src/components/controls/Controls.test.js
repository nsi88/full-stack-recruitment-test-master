import React from 'react';
import Controls from './Controls';
import renderer from 'react-test-renderer';

test('render', () => {
  const tree = renderer.create(<Controls/>).toJSON();
  expect(tree).toMatchSnapshot();
});
