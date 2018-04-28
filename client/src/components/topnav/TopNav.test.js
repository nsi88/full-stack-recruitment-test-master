import React from 'react';
import TopNav from './TopNav';
import renderer from 'react-test-renderer';

test('render', () => {
  const tree = renderer.create(<TopNav/>).toJSON();
  expect(tree).toMatchSnapshot();
});
